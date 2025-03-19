import React from 'react'
import Sidebar from '../components/SideBar/SideBar';
import AdminHeader from '../components/Header/AdminHeader';

export default function AdminTemplate({ content }) {
    return (
        <div
            style={{
                minHeight: "100vh"
            }}
        >
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1">
                    <div className='pb-4'><AdminHeader /></div>
                    <div className='p-3 bg-gray-100'>{content}</div>
                </div>
            </div>
        </div>
    )
}
