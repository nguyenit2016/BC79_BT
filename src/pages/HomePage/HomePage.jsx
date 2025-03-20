import React from 'react'
import ListMovie from './ListMovie'
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel'
import CinemaSystem from '../../components/BannerCarousel/CinemaSystem'
import Showtimes from '../../components/BannerCarousel/Showtime'
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div>
      {/* Thanh điều hướng chứa nút đăng ký / đăng nhập */}
      <div className="absolute top-4 right-4 flex gap-3">
        <Link to="/register">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Đăng ký
          </button>
        </Link>
        <Link to="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Đăng nhập
          </button>
        </Link>
      </div>
      <BannerCarousel /><br /><br />
      <ListMovie />
      <div className="grid grid-cols-12 gap-4 p-4">
      {/* Cột hệ thống rạp (Chiếm 4/12) */}
      <div className="col-span-4 border-r pr-4">
        <CinemaSystem  />
      </div>

      {/* Cột lịch chiếu (Chiếm 8/12) */}
      <div className="col-span-8">
        <Showtimes  />
      </div>
    </div>
    </div>
  );
}
