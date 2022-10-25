import { PrismaClient } from "@prisma/client";

// 新しく投稿するAPI
export default async function handler(req, res) {
  // 送られたJSONを取得
  const json = req.body;

  const prisma = new PrismaClient();
  await prisma.posts.create({
    data: {
      // JSONの中のauthorとcontextを使う
      author: json.author,
      image_url: json.image_url,
      lat: json.lat,
      lng: json.lng,
      context: json.context,
      // publish_at: new Date().toISOString({ timeZone: "Asia/Tokyo" }),
      publish_at: new Date(
        Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
      ),
      // -540 JST
      // 0 UTC
    },
  });

  res.status(200).json({});
}
