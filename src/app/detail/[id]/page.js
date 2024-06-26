import { ObjectId } from "mongodb";
import { connectDB } from "@/utils/database.js"
import Link from "next/link.js";

import Comment from './Comment.js'
import { notFound } from "next/navigation.js";

export default async function Detail(props) {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
  console.log(result)

  if (result === null) {
    return notFound()
  }

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Link href={`/edit/${result._id}`}>수정하기✏️</Link>
      <Comment postId={String(result._id)} />
    </div>
  )
}