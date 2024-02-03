import { connectDB } from "@/utils/database.js";
import Link from "next/link.js";
import DetailLink from "./DetailLink.js";

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)

  return (
    <div className="list-bg">
      {
        result.map((data, idx) => {
          return (
            <div className="list-item" key={idx}>
              <Link href={`/detail/${data._id}`}>
                <h4>{data.title}</h4>
              </Link>
                <p>1월 1일</p>
              <DetailLink postID={data._id.toString()} />
            </div>
          )
        })
      }
    </div>
  )
} 