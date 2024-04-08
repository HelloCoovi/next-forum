import { connectDB } from '@/utils/database.js'
import { handleSubmit } from './actions.js'

export default async function Write2() {

  return (
    <form action={handleSubmit}>
      <input type='text' name='title' />
      <button type='submit'>Submit</button>
    </form>
  )
} 
