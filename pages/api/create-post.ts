import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../lib/post';

interface PostNextApiRequest extends NextApiRequest {
  body: {
    Picture: string;
    Name: string;
    Sen: string;
    Kariloce: string;
  };
}

export default function handler(req: PostNextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const Picture = req.body.Picture;
  const Name = req.body.Name;
  const Sen = req.body.Sen;
  const Kariloce = req.body.Kariloce;

  console.log('body', Picture, Name, Sen, Kariloce);
  if (Picture != null && Name != null && Sen != null && Kariloce != null) {
    Post(Picture, Name, Sen, Kariloce)
      .then((createdPost) => {
        console.log(`ID:${createdPost.Picture} | ${createdPost.Name} を作成しました。`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  res.status(200).json({ Name: 'サンプルの投稿が完了' });
}
