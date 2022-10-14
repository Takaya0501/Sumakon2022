import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: 'データの取得中にエラーが発生しました。' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
