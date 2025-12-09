'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { RecruitmentTable } from './recruitment-table'
import { fetchRecruitments } from '@/lib/api'
import { isSuccessResponse, isUnauthorizedResponse } from '@/lib/api-utils'

export default function ClientRecruitmentTable({ recruitments: initialRecruitments }: { recruitments: any[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [recruitments, setRecruitments] = useState(initialRecruitments)

  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRecruitments(page, limit)
      
      if (isUnauthorizedResponse(result)) {
        router.push('/api/auth/logout?error=session_expired')
        return
      }
      
      if (isSuccessResponse(result)) {
        setRecruitments(result.data.recruitments)
      }
    }
    fetchData()
  }, [page, limit, router])

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(newPage))
    router.push(`/dashboard?${params.toString()}`)
  }

  return (
    <RecruitmentTable
      recruitments={recruitments}
      page={page}
      limit={limit}
      onPageChange={handlePageChange}
    />
  )
}
