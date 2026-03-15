
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.POSTGRES_URL!)

export default async function handler(req: VercelRequest, res: VercelResponse) {

  const { path } = req.query

  if (!path) {
    return res.status(400).json({ error: 'path required' })
  }

  try {

    const result = await sql`
      SELECT SUM(count) as total
      FROM wl_reaction
      WHERE url = ${path}
    `

    res.status(200).json({
      path,
      total: result[0]?.total || 0
    })

  } catch (err) {

    res.status(500).json({ error: 'database error' })

  }
}
