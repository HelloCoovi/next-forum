import { connectDB } from "@/utils/database.js";
import Link from "next/link.js";

import ListItem from "./ListItem.js";

export const dynamic = 'force-dynamic' // force-static

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  result = result.map(doc => ({ ...doc, _id: doc._id.toString() }));

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
} 