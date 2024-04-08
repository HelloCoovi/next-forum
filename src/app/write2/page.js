import { connectDB } from '@/utils/database.js'
import { handleSubmit } from './actions.js'

export default async function Write2() {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post_test').find().toArray()

  return (
    <div>
      <form action={handleSubmit}>
        <input type='text' name='title' />
        <button type='submit'>Submit</button>
      </form>
      {
        result ? result.map((post, idx) => <p key={post.title}>글제목: {post.title}</p>) : null
      }
    </div>
  )
} 
