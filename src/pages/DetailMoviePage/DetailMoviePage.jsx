import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=";
const API_HEADERS = {
  headers: {
    TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA"
  }
};

const MovieDetail = () => {
  const { movieId } = useParams();
  const navigate = useNavigate(); // Hook để điều hướng
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}${movieId}`, API_HEADERS)
      .then(response => setMovie(response.data.content))
      .catch(error => console.error("Lỗi khi lấy dữ liệu phim:", error));
  }, [movieId]);

  if (!movie) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="p-4">
      <motion.div 
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <img src={movie.hinhAnh} alt={movie.tenPhim} className="w-full h-96 object-cover" />
        <h1 className="text-2xl font-bold mt-4">{movie.tenPhim}</h1>
        <p className="mt-2 text-gray-700">{movie.moTa}</p>
        <h2 className="text-lg font-semibold mt-4">Lịch Chiếu</h2>
        {movie.heThongRapChieu.map((cinema) => (
          <div key={cinema.maHeThongRap} className="mt-4 border-t pt-2">
            <h3 className="font-bold text-lg">{cinema.tenHeThongRap}</h3>
            {cinema.cumRapChieu.map((branch) => (
              <div key={branch.maCumRap} className="mt-2">
                <h4 className="font-semibold">{branch.tenCumRap}</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {branch.lichChieuPhim.map((showtime) => (
                    <button 
                      key={showtime.maLichChieu} 
                      onClick={() => navigate(`/booking/${showtime.MaLichChieu}`)} // Chuyển đến trang Booking
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                    >
                      {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovieDetail;
