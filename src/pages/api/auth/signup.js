import { connectDB } from '@/utils/database.js'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');
    await db.collection('user_cred').insertOne(req.body)
    res.status(200).json('가입완료')
  }
}
