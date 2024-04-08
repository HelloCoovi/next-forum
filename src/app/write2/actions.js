'use server'

import { revalidatePath, revalidateTag } from 'next/cache.js'
// 작업후 데이터를 다시 불러오는 함수 설정
// revalidatePath: 해당 경로의 데이터를 다시 불러옴
// revalidateTag: 해당 캐쉬 태그의 데이터를 다시 불러옴

import { connectDB } from "@/utils/database.js"

export async function handleSubmit(formData) {
  const db = (await connectDB).db('forum')
  await db.collection('post_test').insertOne({ title: formData.get('title') })
  revalidatePath('/write2')
}