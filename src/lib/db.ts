import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// ── Schema init (run once) ──────────────────────────────────
export async function initDB() {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id          SERIAL PRIMARY KEY,
      slug        TEXT UNIQUE NOT NULL,
      name        TEXT NOT NULL,
      short_name  TEXT,
      category    TEXT,
      category_slug TEXT,
      price       NUMERIC,
      size        TEXT,
      image       TEXT,
      tag         TEXT,
      tag_color   TEXT,
      headline    TEXT,
      summary     TEXT,
      description TEXT,
      mechanism   TEXT,
      cas_number  TEXT,
      keywords    TEXT[],
      benefits    JSONB,
      research_highlights TEXT[],
      ideal_for   TEXT[],
      related_slugs TEXT[],
      affiliate_url TEXT,
      search_vector TSVECTOR GENERATED ALWAYS AS (
        to_tsvector('english',
          coalesce(name, '') || ' ' ||
          coalesce(short_name, '') || ' ' ||
          coalesce(category, '') || ' ' ||
          coalesce(headline, '') || ' ' ||
          coalesce(summary, '')
        )
      ) STORED,
      created_at  TIMESTAMPTZ DEFAULT now()
    )
  `

  await sql`
    CREATE INDEX IF NOT EXISTS products_search_idx
    ON products USING GIN(search_vector)
  `

  await sql`
    CREATE TABLE IF NOT EXISTS chat_sessions (
      id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at TIMESTAMPTZ DEFAULT now(),
      messages   JSONB DEFAULT '[]'
    )
  `
}

// ── Product queries ─────────────────────────────────────────
export async function getAllProducts() {
  return sql`SELECT * FROM products ORDER BY id`
}

export async function getProductBySlug(slug: string) {
  const rows = await sql`SELECT * FROM products WHERE slug = ${slug} LIMIT 1`
  return rows[0] ?? null
}

export async function searchProducts(query: string) {
  if (!query.trim()) return sql`SELECT * FROM products ORDER BY id`
  return sql`
    SELECT *, ts_rank(search_vector, plainto_tsquery('english', ${query})) AS rank
    FROM products
    WHERE search_vector @@ plainto_tsquery('english', ${query})
    ORDER BY rank DESC
    LIMIT 20
  `
}

export async function getProductsByCategory(categorySlug: string) {
  return sql`SELECT * FROM products WHERE category_slug = ${categorySlug} ORDER BY id`
}

export async function getRelatedProducts(slugs: string[]) {
  if (!slugs.length) return []
  return sql`SELECT * FROM products WHERE slug = ANY(${slugs})`
}

// ── Upsert (used by seed script) ────────────────────────────
export async function upsertProduct(p: {
  slug: string
  name: string
  short_name?: string
  category?: string
  category_slug?: string
  price?: number
  size?: string
  image?: string
  tag?: string
  tag_color?: string
  headline?: string
  summary?: string
  description?: string
  mechanism?: string
  cas_number?: string
  keywords?: string[]
  benefits?: object
  research_highlights?: string[]
  ideal_for?: string[]
  related_slugs?: string[]
  affiliate_url?: string
}) {
  await sql`
    INSERT INTO products (
      slug, name, short_name, category, category_slug, price, size, image,
      tag, tag_color, headline, summary, description, mechanism, cas_number,
      keywords, benefits, research_highlights, ideal_for, related_slugs, affiliate_url
    ) VALUES (
      ${p.slug}, ${p.name}, ${p.short_name ?? null}, ${p.category ?? null},
      ${p.category_slug ?? null}, ${p.price ?? null}, ${p.size ?? null},
      ${p.image ?? null}, ${p.tag ?? null}, ${p.tag_color ?? null},
      ${p.headline ?? null}, ${p.summary ?? null}, ${p.description ?? null},
      ${p.mechanism ?? null}, ${p.cas_number ?? null},
      ${p.keywords ?? null}, ${JSON.stringify(p.benefits ?? [])}::jsonb,
      ${p.research_highlights ?? null}, ${p.ideal_for ?? null},
      ${p.related_slugs ?? null}, ${p.affiliate_url ?? null}
    )
    ON CONFLICT (slug) DO UPDATE SET
      name = EXCLUDED.name,
      short_name = EXCLUDED.short_name,
      category = EXCLUDED.category,
      category_slug = EXCLUDED.category_slug,
      price = EXCLUDED.price,
      size = EXCLUDED.size,
      image = EXCLUDED.image,
      tag = EXCLUDED.tag,
      tag_color = EXCLUDED.tag_color,
      headline = EXCLUDED.headline,
      summary = EXCLUDED.summary,
      description = EXCLUDED.description,
      mechanism = EXCLUDED.mechanism,
      cas_number = EXCLUDED.cas_number,
      keywords = EXCLUDED.keywords,
      benefits = EXCLUDED.benefits,
      research_highlights = EXCLUDED.research_highlights,
      ideal_for = EXCLUDED.ideal_for,
      related_slugs = EXCLUDED.related_slugs,
      affiliate_url = EXCLUDED.affiliate_url
  `
}

export default sql
