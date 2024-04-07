import { NextResponse } from 'next/server'

export function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/list')) {
    console.log(new Date())
    console.log(request.headers.get('sec-ch-ua-platform')) // OS 출력하기(사파리는 출력안됨)
    return NextResponse.next()
  }
}