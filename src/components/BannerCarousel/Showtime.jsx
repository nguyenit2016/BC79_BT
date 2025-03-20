import { useEffect, useState } from "react";
import axios from "axios";

const Showtimes = ({ selectedCinema }) => {
  const [showtimes, setShowtimes] = useState([]);
  const API_URL = `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${selectedCinema}&maNhom=GP01`;

  useEffect(() => {
    if (!selectedCinema) return; // Không fetch nếu chưa chọn rạp

    const fetchShowtimes = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: { TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA" },
        });
        setShowtimes(response.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy lịch chiếu:", error);
      }
    };

    fetchShowtimes();
  }, [selectedCinema]);

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-bold mb-4">Lịch chiếu</h2>
      {showtimes.length === 0 ? (
        <p>Chưa có dữ liệu lịch chiếu.</p>
      ) : (
        showtimes.map((cinema) => (
          <div key={cinema.maCumRap} className="border p-3 rounded-lg mb-4 shadow">
            <h3 className="font-semibold text-lg">{cinema.tenCumRap}</h3>
            {cinema.danhSachPhim.map((movie) => (
              <div key={movie.maPhim} className="mt-2">
                <p className="font-bold">{movie.tenPhim}</p>
                <div className="flex gap-2 flex-wrap">
                  {movie.lstLichChieuTheoPhim.map((showtime) => (
                    <span key={showtime.maLichChieu} className="px-3 py-1 bg-blue-500 text-white rounded">
                      {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Showtimes;
