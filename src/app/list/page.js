import { connectDB } from "@/utils/database.js";
import Link from "next/link.js";

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)

  return (
    <div className="list-bg">
      {
        result.map((data, idx) => {
          return (
            <Link href={`/detail/${data._id}`}>
              <div className="list-item" key={idx}>
                <h4>{data.title}</h4>
                <p>1월 1일</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
} 