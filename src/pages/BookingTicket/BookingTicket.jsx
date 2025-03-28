import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { bookingService } from '../../api/bookingService';

const TicketBooking = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const MA_LICH_CHIEU = 1234;
  // const API_URL = `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MA_LICH_CHIEU}`;
  // const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";

  // useEffect(() => {
  //   axios
  //     .get(API_URL, {
  //       headers: {
  //         TokenCybersoft: `${TOKEN_CYBERSOFT}`,
  //       },
  //     })
  //     .then((response) => {
  //       setSeats(response.data.content.danhSachGhe);
  //     })
  //     .catch((error) => console.error("Lỗi khi lấy dữ liệu: ", error));
  // }, []);

  useEffect(() => {
    bookingService(MA_LICH_CHIEU)
      .then((result) => {
        setSeats(result.data.content.danhSachGhe);
      }).catch((err) => {
      });
  }, []);

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat)
        ? prevSelected.filter((s) => s !== seat)
        : [...prevSelected, seat]
    );
  };

  const bookTickets = () => {
    console.log("Ghế đã đặt: ", selectedSeats);
    alert("Đặt vé thành công!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Đặt vé xem phim</h1>

      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-8 gap-2">
          {seats.map((seat) => (
            <button
              key={seat.maGhe}
              className={`p-3 rounded-lg font-bold transition ${seat.daDat
                  ? "bg-red-500 text-white cursor-not-allowed"
                  : selectedSeats.includes(seat)
                    ? "bg-green-500 text-white"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
              onClick={() => toggleSeatSelection(seat)}
              disabled={seat.daDat}
            >
              {seat.tenGhe}
            </button>
          ))}
        </div>
        <Button
          className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
          onClick={bookTickets}
          disabled={selectedSeats.length === 0}
        >
          Đặt vé
        </Button>
      </div>
    </div>
  );
};

export default TicketBooking;
