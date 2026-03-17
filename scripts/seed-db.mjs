/**
 * Seed the Neon database
 * Run: node scripts/seed-db.mjs
 * (calls the /api/seed route on the running dev server)
 */
const BASE = process.argv[2] || 'http://localhost:3000'

console.log(`Calling ${BASE}/api/seed ...`)

const res = await fetch(`${BASE}/api/seed`, { method: 'POST' })
const data = await res.json()

if (!res.ok) {
  console.error('Seed failed:', data)
  process.exit(1)
}
console.log('✅ Seed complete:', data)
