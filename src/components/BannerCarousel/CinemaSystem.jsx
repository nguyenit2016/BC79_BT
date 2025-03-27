import { useEffect, useState } from "react";
import axios from "axios";

const CinemaSystem = () => {
  const [cinemas, setCinemas] = useState([]);
  const API_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA",
          },
        });
        setCinemas(response.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu rạp phim:", error);
      }
    };

    fetchCinemas();
  }, []);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg border border-purple-700">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">Hệ thống rạp</h2>
      <ul className="flex flex-col space-y-3">
        {cinemas.map((cinema) => (
          <li
            key={cinema.maHeThongRap}
            className="flex items-center gap-4 border border-gray-700 p-3 rounded-lg shadow-md bg-gray-900 hover:border-purple-500 transition duration-300"
          >
            <img
              src={cinema.logo}
              alt={cinema.tenHeThongRap}
              className="w-16 h-16 object-contain rounded-full border border-purple-500 shadow-md"
            />
            <p className="font-semibold text-purple-300">{cinema.tenHeThongRap}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaSystem;
