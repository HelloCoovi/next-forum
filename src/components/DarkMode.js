'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation.js"

import { getCookieValue } from "@/utils/utils.js"

export default function DarkMode() {
  const router = useRouter()

  useEffect(() => {
    // let cookieValue = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0] // 간단히 쿠키 정보 불러오기
    let cookieValue = getCookieValue('mode')
    if (cookieValue === null) {
      document.cookie = `mode=light; max-age=${3600 * 24 * 30}`
    }

  }, [])
  return (
    <span onClick={() => {
      let cookieValue = getCookieValue('mode')
      if (cookieValue === 'light') {
        document.cookie = `mode=dark; max-age=${3600 * 24 * 30}`
      } else {
        document.cookie = `mode=light; max-age=${3600 * 24 * 30}`
      }
      router.refresh()
    }}>🌙</span>
  )
}