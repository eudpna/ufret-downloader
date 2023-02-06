import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import { parseUfret } from '../../game/parseUfret';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const urlStr = req.query.url

    if (typeof urlStr !== 'string') res.status(400).send('Invalid request.')

    const url = new URL(urlStr as string)
     
    // validate url
    if (!url || !(url.hostname === 'ufret.jp' ||
        url.hostname === 'www.ufret.jp')
    ) res.status(400).send('Invalid request.')

    const response = await fetch(urlStr as string)

    if (!response.ok) return res.status(response.status).send(response.body)

    const ufretHtml = await response.text()

    const ufretResult = parseUfret(ufretHtml)

    res.status(200).json({ ...ufretResult })
}