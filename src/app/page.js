import { connectDB } from "@/utils/database.js";

import Image from "next/image";
import styles from "./page.module.css";

// 페이지 단위 캐싱(60초 단위로 데이터 갱신)
export const revalidate = 60

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  // console.log(result)

  // await fetch('/URL', { cache: 'force-cache' }) // 사실 fetch에 기본으로 force-cache 옵션이 있어서 안건드려도 됨
  // await fetch('/URL', { cache: 'no-store' })
  // await fetch('/URL', { next: { revalidate: 60 } })


  return (
    <h2>초기세팅</h2>
  );
}
