import { connectDB } from "@/utils/database.js"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == 'POST') {

    let editedPost = { title: req.body.title, content: req.body.content }
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').updateOne(
      { _id: new ObjectId(req.body._id) },
      { $set: editedPost }
      // { $inc: 덮어쓰기 안하고 기존값을 업데이트할 때 }
    );

    res.redirect(302, '/list')
  }
}