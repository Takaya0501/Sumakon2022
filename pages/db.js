import { PrismaClient } from '@prisma/client';
export default function Db(props) {
  return <div>データベースには「{props.sentence}」が入っています。</div>;
}
export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const result = await prisma.post.findMany();
  return {
    props: {
      sentence: result[0].sentence,
    },
  };
}
//175から
