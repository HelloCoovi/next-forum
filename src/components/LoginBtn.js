'use client'

import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function LoginBtn() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // localStorage.setItem('테마모드', 'dark')
      localStorage.getItem('테마모드')
    }
  }, [])

  return <button onClick={() => signIn()}>로그인</button>
}