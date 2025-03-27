import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../../pic/logo.png"

export default function Header() {
  let user = useSelector((state) => state.userSlice.user);

  let handleLogout = () => {
    localStorage.removeItem("USER");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center px-10 shadow-lg h-20 bg-gray-900">
      
      <div className="flex items-center gap-3">
        <img src={logo} alt="Cybersoft Cinema" className="w-12 h-12" />
        <Link to="/" className="text-2xl font-bold text-red-500">Cybersoft Cinema</Link>
      </div>

      
      <div className="flex items-center gap-5">
        {user ? (
          <>
            <h2 className="text-lg">Xin chào, {user.hoTen}</h2>
            <span 
              className="px-4 py-2 bg-purple-700 text-white rounded shadow-lg hover:bg-purple-800 transition duration-300"
              onClick={handleLogout}
            >
              Đăng xuất
            </span>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="px-4 py-2 bg-blue-700 text-white rounded shadow-lg hover:bg-blue-800 transition duration-300"
            >
              Đăng nhập
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 bg-purple-700 text-white rounded shadow-lg hover:bg-purple-800 transition duration-300"
            >
              Đăng ký
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
