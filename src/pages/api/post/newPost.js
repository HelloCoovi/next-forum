import { connectDB } from "@/utils/database.js"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth].js";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)

  if (session) {
    req.body.author = session.user.email
  }
  console.log("*** API - newPost.js ***")
  console.log(req.body)

  if (req.method == 'POST') {
    if (req.body.title.trim().length === 0 || req.body.content.trim().length === 0) {
      return res.status(400).json({ error: "제목 혹은 내용이 없습니다." });
    }
    try {
      const db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(req.body)
      res.status(200).redirect('/list')
    } catch (error) {
      // 
    }
  }
}