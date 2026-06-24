import type { NextApiRequest, NextApiResponse } from 'next';

const ARC_ENDPOINT = process.env.ARC_CONTACT_ENDPOINT ?? 'https://thearc.arconinc.com/api/public/contact';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body as Record<string, string>;

  if (!body?.title) {
    return res.status(400).json({ error: 'title is required' });
  }

  try {
    const upstream = await fetch(ARC_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CONTACT_FORM_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      console.error('[contact] Arc returned', upstream.status, data);
    }
    return res.status(upstream.status).json(data);
  } catch (err) {
    console.error('[contact] fetch failed:', err);
    return res.status(502).json({ error: 'Failed to reach backend' });
  }
}
