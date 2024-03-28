import { connectDB } from "@/utils/database.js";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth].js";

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const session = await getServerSession(req, res, authOptions);

    const db = (await connectDB).db('forum');
    const targetPost = await db.collection('post').findOne({ _id: new ObjectId(req.body) })
    // console.log(targetPost)

    if (targetPost.author == session.user.email) {
      let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
    // console.log(result) // 삭제결과 출력
      return res.status(200).json('삭제완료')
    } else {
      return res.status(500).json('현재유저가 작성한 글이 아닙니다.')
    }
  }
};