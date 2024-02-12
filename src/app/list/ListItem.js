'use client'

import Link from "next/link.js"
import DetailLink from "./DetailLink.js";

export default function ListItem({ result }) {
  return (
    <div>
      {
        result.map((data, idx) => {
          return (
            <div className="list-item" key={idx}>
              <Link href={`/detail/${data._id}`}>
                <h4>{data.title}</h4>
              </Link>
              <button onClick={() => {
                fetch('/api/post/delete', {
                  method: 'DELETE', // GET, POST, PUT
                  body: data._id // JSON.stringify(['1', '2']) // 배열, 객체등을 body로 보낼때는 JSON.stringify가 필요
                })
                  .then((res) => {
                    if (res.status == 200) return res.json()
                    else {
                      // 서버가 에러코드전송시 실행할코드
                    }
                  })
                  .then((result) => {
                    // 추가로 성공시 실행할코드
                  }).catch((error) => {
                    // 인터넷문제 등으로 실패시 실행할코드
                    console.log(error)
                  })
              }}>🗑️</button>

              <button onClick={() => {
                fetch(`/api/querystring?title=${data.title}&jabs=developer`)
              }}>📃 querystring</button>
              <p>1월 1일</p>
              <DetailLink postID={data._id.toString()} />
            </div>
          )
        })
      }
    </div>
  )
}