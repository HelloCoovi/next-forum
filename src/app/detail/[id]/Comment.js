'use client'

import { useState } from 'react'

export default function Comment(props) {
  let [comment, setComment] = useState('')

  return (
    <div>
      <input onChange={(e) => { setComment(e.target.value) }} />
      <button onClick={() => {
        fetch('/api/comment/new', {
          method: 'POST',
          body: JSON.stringify({
            comment: comment,
            postId: props.postId,
          }),
        })
      }
      }>댓글전송</button>
    </div >
  )
} 