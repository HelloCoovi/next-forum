'use server'

import { connectDB } from "@/utils/database.js"

export async function handleSubmit(formData) {
  const db = (await connectDB).db('forum')
  await db.collection('post_test').insertOne({ title: formData.get('title') })
}