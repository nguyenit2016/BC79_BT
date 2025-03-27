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
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}${movieId}`, API_HEADERS)
      .then(response => setMovie(response.data.content))
      .catch(error => console.error("Lỗi khi lấy dữ liệu phim:", error));
  }, [movieId]);

  if (!movie) return <p className="text-white text-center mt-10">Đang tải dữ liệu...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <motion.div 
        className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Hình ảnh */}
        <img src={movie.hinhAnh} alt={movie.tenPhim} className="w-full h-96 object-cover rounded-lg" />
        
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold mt-4 text-purple-400">{movie.tenPhim}</h1>
        <p className="mt-2 text-gray-300">{movie.moTa}</p>

        {/* Lịch chiếu */}
        <h2 className="text-xl font-semibold mt-6 text-purple-400">Lịch Chiếu</h2>
        {movie.heThongRapChieu.map((cinema) => (
          <div key={cinema.maHeThongRap} className="mt-4 border-t border-gray-700 pt-3">
            <h3 className="font-bold text-lg text-white">{cinema.tenHeThongRap}</h3>
            {cinema.cumRapChieu.map((branch) => (
              <div key={branch.maCumRap} className="mt-2">
                <h4 className="font-semibold text-gray-300">{branch.tenCumRap}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {branch.lichChieuPhim.map((showtime) => (
                    <button 
                      key={showtime.maLichChieu} 
                      onClick={() => navigate(`/booking/${showtime.MaLichChieu}`)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
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
