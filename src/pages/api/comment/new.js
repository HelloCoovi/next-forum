import { connectDB } from '@/utils/database.js'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].js'

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  if (req.method === 'POST') {
    req.body = JSON.parse(req.body)
    let commentInfo = {
      content: req.body.comment,
      postId: req.body.postId,
      author: session.user.email,
    }

    const db = (await connectDB).db('forum')
    let result = await db.collection('comment').insertOne(commentInfo)
    res.status(200).json('댓글 등록 완료')
  }
}