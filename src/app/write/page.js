export default async function Write() {
  return (
    <div className="p-20">
      <form action="/api/post/newPost" method="POST">
        <input name="title" placeholder="글제목" />
        <textarea name="content" cols="30" rows="10" placeholder="글내용" />
        <button type="submit">전송</button>
      </form>
    </div>
  )
} 