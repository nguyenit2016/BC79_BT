import React from 'react'
import ListMovie from './ListMovie'
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel'
import CinemaSystem from '../../components/BannerCarousel/CinemaSystem'
import Showtimes from '../../components/BannerCarousel/Showtime'


export default function HomePage() {
  return (
    <div>
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
  )
}
