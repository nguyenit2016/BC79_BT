import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
  let user = useSelector((state) => {
    return state.userSlice.user
  });
  
  let handlLogout = () => {
    localStorage.removeItem("USER");
    window.location.href = "/login";
  }

  return (
    <div className='flex justify-between items-center px-20 shadow-lg h-20'>
      <Link className='text-2xl' to='/'>Home</Link>
      {/* {user && (<h2 className='text-lg'>Họ tên: {user.hoTen}</h2>)} */}
      <div className='flex justify-between items-center'>
        <h2 className='text-lg'>{user?.hoTen}</h2>
        {user && (<span className='text-lg px-5 text-blue-500 cursor-pointer' onClick={handlLogout}>Logout</span>)}
        {!user && (<Link className='text-2xl' to='/login'>Login</Link>)}
      </div>

    </div>
  )
}
// (falsy) 6 giá trị của false bao gồm
// false, null, undefined, 0, NaN, "" (empty string)
// (truthy) còn lại là true hết