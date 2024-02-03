'use client'

import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function DetailLink(props) {
  const router = useRouter()

  return (
    <button onClick={() => { router.push(`/detail/${props.postID}`) }}>버튼</button>

  )
}