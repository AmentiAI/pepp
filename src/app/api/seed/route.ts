import { NextResponse } from 'next/server'
import { initDB, upsertProduct } from '@/lib/db'
import { products, AFFILIATE_PRODUCT } from '@/lib/products'

export async function POST() {
  try {
    await initDB()

    for (const p of products) {
      await upsertProduct({
        slug: p.slug,
        name: p.name,
        short_name: p.shortName,
        category: p.category,
        category_slug: p.categorySlug,
        price: p.price,
        size: p.size,
        image: p.image,
        tag: p.tag,
        tag_color: p.tagColor,
        headline: p.headline,
        summary: p.summary,
        description: p.description,
        mechanism: p.mechanism,
        cas_number: p.casNumber,
        keywords: p.keywords,
        benefits: p.benefits,
        research_highlights: p.researchHighlights,
        ideal_for: p.idealFor,
        related_slugs: p.relatedSlugs,
        affiliate_url: AFFILIATE_PRODUCT(p.slug),
      })
    }

    return NextResponse.json({ success: true, seeded: products.length })
  } catch (err) {
    console.error('Seed error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
