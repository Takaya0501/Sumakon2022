import { PrismaClient } from '@prisma/client';
export default function Db(props) {
  return (
    <div>
      データベースには「{props.sentence1} {props.user1}」が入っています。
    </div>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const result = await prisma.post.findMany();
  return {
    props: {
      sentence1: result[0].sentence,
      user1: result[0].user,
      picture: result[0].picture,
    },
  };
}
//175から
