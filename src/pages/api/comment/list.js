import { connectDB } from '@/utils/database.js'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  console.log(req.query)
  // console.log(req.query.postId)

  const db = (await connectDB).db('forum')
  let result = await db.collection('comment').find({ postId: new ObjectId(req.query.postId) }).toArray()
  res.status(200).json(result)
}