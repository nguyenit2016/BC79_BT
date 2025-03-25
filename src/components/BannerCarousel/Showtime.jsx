import { useEffect, useState } from "react";
import axios from "axios";

const Showtimes = () => {
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [error, setError] = useState(null);

  const API_URL =
    "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01";

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW5lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        setError(null);
        const response = await axios.get(API_URL, {
          headers: { TokenCybersoft: TOKEN },
        });

        if (!response.data.content) throw new Error("Dữ liệu không hợp lệ");

        setCinemas(response.data.content);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setError("Không thể tải dữ liệu. Vui lòng thử lại!");
      }
    };

    fetchCinemas();
  }, []);

  const handleSelectCinema = (event) => {
    setSelectedCinema(event.target.value);
  };

  const selectedShowtimes =
    selectedCinema && cinemas.find((cinema) => cinema.maHeThongRap === selectedCinema);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Lịch Chiếu Phim</h2>

      {error && <p className="text-red-500">{error}</p>}

      {/* Chọn hệ thống rạp */}
      <select
        className="p-2 border rounded mb-4 w-full"
        value={selectedCinema}
        onChange={handleSelectCinema}
      >
        <option value="">Chọn rạp...</option>
        {cinemas.map((cinema) => (
          <option key={cinema.maHeThongRap} value={cinema.maHeThongRap}>
            {cinema.tenHeThongRap}
          </option>
        ))}
      </select>

      {/* Hiển thị lịch chiếu trong thanh cuộn */}
      <div className="max-h-[700px] overflow-y-auto border p-4 rounded-lg shadow bg-white">
        {selectedShowtimes ? (
          selectedShowtimes.lstCumRap.map((cumRap) => (
            <div key={cumRap.maCumRap} className="border-b pb-4 mb-4">
              <h3 className="font-semibold text-lg">{cumRap.tenCumRap}</h3>
              {cumRap.danhSachPhim.map((movie) => (
                <div key={movie.maPhim} className="mt-2">
                  <p className="font-bold">{movie.tenPhim}</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.lstLichChieuTheoPhim.map((showtime) => (
                      <span
                        key={showtime.maLichChieu}
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                      >
                        {new Date(showtime.ngayChieuGioChieu).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>Vui lòng chọn rạp để xem lịch chiếu.</p>
        )}
      </div>
    </div>
  );
};

export default Showtimes;
