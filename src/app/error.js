'use client'

export default function Error({ error, reset }) {

  return (
    <div>
      <h2>에러남</h2>
      <button onClick={() => reset()}>리셋 버튼</button>
    </div>
  )
}