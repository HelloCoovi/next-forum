import { connectDB } from "@/utils/database.js"
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div className="p-20">
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <textarea name="content" cols="30" rows="10" defaultValue={result.content} />
        <input style={{ display: 'none' }} name="_id" defaultValue={result._id.toString()} />
        <button type="submit">수정하기</button>
      </form>
    </div>
  )
} 