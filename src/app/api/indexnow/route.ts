import { NextResponse } from 'next/server'
import { products } from '@/lib/products'

const BASE_URL = 'https://stackspeptide.com'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || ''

export async function POST() {
  const urls = [
    BASE_URL,
    `${BASE_URL}/products`,
    `${BASE_URL}/stacks`,
    `${BASE_URL}/looksmaxxing`,
    `${BASE_URL}/guide`,
    `${BASE_URL}/faq`,
    ...products.map(p => `${BASE_URL}/products/${p.slug}`),
  ]

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'stackspeptide.com',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })

    return NextResponse.json({ submitted: urls.length, status: res.status })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
