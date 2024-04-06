'use client'

import { useEffect, useState } from 'react'

export default function Comment(props) {
  const [commentContent, setCommentContent] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`/api/comment/list?postId=${props.postId}`)
      .then(res => res.json())
      .then((result) => {
        setComments(result)
      })
  }, [])

  return (
    <div>
      <section>
        <h3>댓글목록</h3>
        {
          comments.length > 0 ?
            <ul>
              {
                comments.map((comment, idx) => {
                  return <li key={idx}>{comment.content}</li>
                })
              }
            </ul>
            :
            <h4>댓글이 없습니다.</h4>
        }
      </section>
      <input onChange={(e) => { setCommentContent(e.target.value) }} />
      <button onClick={() => {
        fetch('/api/comment/new', {
          method: 'POST',
          body: JSON.stringify({
            comment: commentContent,
            postId: props.postId,
          }),
        })
      }
      }>댓글전송</button>
    </div >
  )
} 