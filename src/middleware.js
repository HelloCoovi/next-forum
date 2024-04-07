import { NextResponse } from 'next/server'
// import { getToken } from 'next-auth/jwt'

export async function middleware(request) {

  // const session = await getToken({ req: request })

  // if (request.nextUrl.pathname.startsWith('/write')) {
  //   if (session === null) {
  //     // NextAuth 버전에 따라 안될수도 있기 때문에 full Url을 사용해야 할 수도 있음
  //     // return NextResponse.redirect(new URL('api/auth/signin'), request.url)
  //     return NextResponse.redirect('http://localhost:3000/api/auth/signin')
  //   }
  // }


  // if (request.nextUrl.pathname.startsWith('/list')) {
  //   console.log(new Date())
  //   console.log(request.headers.get('sec-ch-ua-platform')) // OS 출력하기(사파리는 출력안됨)
  //   return NextResponse.next()
  // }

  request.cookies.get('쿠키이름')  //출력
  request.cookies.has('쿠키이름')  //존재확인
  request.cookies.delete('쿠키이름')  //삭제

  const response = NextResponse.next()
  response.cookies.set({
    name: 'mode',
    value: 'dark',
    maxAge: 3600,
    httpOnly: true, // JS script로 cookie 수정 막기(개발자도구는 못막음)
  })
  return response  //쿠키생성
}