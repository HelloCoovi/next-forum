import { connectDB } from "@/utils/database.js";

import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  // console.log(result)

  return (
    <h2>초기세팅</h2>
  );
}
