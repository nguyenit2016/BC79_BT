import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => res.json())
      .then((data) => setBanners(data.content))
      .catch((err) => console.error("Lỗi fetch banner:", err));
  }, []);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[400px]"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.maBanner}>
          <img src={banner.hinhAnh} alt="Banner" className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;
