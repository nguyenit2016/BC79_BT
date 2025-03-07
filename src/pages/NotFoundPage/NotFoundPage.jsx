import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    
    <div className='text-center'>
        <p className='my-10'>File Not Found</p>
        <Link to='/'>Về trang chủ</Link>
    </div>
  )
}

// ví dụ về not found
// not fount page, code pen