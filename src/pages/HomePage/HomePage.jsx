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
      <CinemaSystem />
      <Showtimes />
    </div>
  )
}
