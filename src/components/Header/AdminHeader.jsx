import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminHeader() {
    let user = useSelector((state) => {
        return state.userSlice.user
    });

    let handlLogout = () => {
        localStorage.removeItem("USER");
        window.location.href = "/login";
    }
    return (
        <div className='flex justify-end'>
            <h3 className='text-lg'>{user?.hoTen}</h3>
            {user && (<span className='text-lg px-5 text-blue-500 cursor-pointer' onClick={handlLogout}>Logout</span>)}
            {!user && (<Link className='text-2xl' to='/login'>Login</Link>)}
        </div>
    )
}
