
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.POSTGRES_URL!)

export default async function handler(req: VercelRequest, res: VercelResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { path, type } = req.body

  if (!path || !type) {
    return res.status(400).json({ error: 'path and type required' })
  }

  try {

    await sql`
      INSERT INTO wl_reaction (url, type, count)
      VALUES (${path}, ${type}, 1)
      ON CONFLICT (url, type)
      DO UPDATE SET count = wl_reaction.count + 1
    `

    res.status(200).json({ success: true })

  } catch (err) {

    res.status(500).json({ error: 'database error', detail: err })

  }
}
