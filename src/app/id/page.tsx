'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get('category');
  return (
    <div>Test: {query}</div>
  )
}

export default Page;
