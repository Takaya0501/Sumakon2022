import { PrismaClient } from '@prisma/client';

// 新しく投稿するAPI
export default async function handler(req, res) {
  // 送られたJSONを取得
  const json = req.body;

  const prisma = new PrismaClient();
  await prisma.dailies.create({
    data: {
      // JSONの中のauthorとcontextを使う
      author: json.author,
      pic: json.pic,
      lat: json.lat,
      lng: json.lng,
      context: json.context,
      dailies: json.dailies,
    },
  });

  res.status(200);
}
