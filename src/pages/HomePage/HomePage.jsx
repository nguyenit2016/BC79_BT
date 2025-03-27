import React from 'react'
import ListMovie from './ListMovie'
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel'
import CinemaSystem from '../../components/BannerCarousel/CinemaSystem'
import Showtimes from '../../components/BannerCarousel/Showtime'
export default function HomePage() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-purple-900 opacity-50"></div>
      <div className="absolute inset-0 mix-blend-overlay">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="relative z-10 pt-20">
        <BannerCarousel /><br /><br />
        <ListMovie />
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Cột hệ thống rạp (Chiếm 4/12) */}
          <div className="col-span-4 border-r border-gray-700 pr-4">
            <CinemaSystem  />
          </div>

          {/* Cột lịch chiếu (Chiếm 8/12) */}
          <div className="col-span-8">
            <Showtimes  />
          </div>
        </div>
      </div>
    </div>
  );
}
