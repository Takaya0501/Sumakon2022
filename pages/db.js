import { PrismaClient } from '@prisma/client';
export default function Db(props) {
  return (
    <div>
      データベースには「{props.sentence1} {props.picture}」が入っています。
    </div>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const result = await prisma.post.findMany();
  return {
    props: {
      sentence1: result[0].sentence,
      picture: result[0].picture,
      // sentence2: result[1].sentence,
      // sentence4: result[3].sentence,
    },
  };
}
//175から
