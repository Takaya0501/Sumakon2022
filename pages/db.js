import { PrismaClient } from '@prisma/client';
export default function Db(props) {
  return (
    <div>
      データベースには「{props.sentence1} {props.sentence2}」が入っています。
    </div>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const result = await prisma.post.findMany();
  return {
    props: {
      sentence1: result[0].sentence,
      sentence2: result[1].sentence,
    },
  };
}
//175から
