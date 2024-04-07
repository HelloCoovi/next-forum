import { NextResponse } from 'next/server'

export function middleware(request) {

  // middleware 에서는 여러가지 정보에 접근가능
  console.log(request.nextUrl)
  console.log(request.cookies)
  console.log(request.headers)

  NextResponse.next() // 이상없음 그대로 진행
  NextResponse.redirect() // 다른 페이지로 강제 이동
  NextResponse.rewrite() // 다른 페이지로 강제 이동(but URL 변경 없음)
} 