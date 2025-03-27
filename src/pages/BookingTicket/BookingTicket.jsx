import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";



const TicketBooking = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const MA_LICH_CHIEU = 1234;
  const API_URL = `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=`;
  const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN_CYBERSOFT}`,
        },
      })
      .then((response) => {
        setSeats(response.data.content.danhSachGhe);
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu: ", error));
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Đặt vé xem phim</h1>
      <div className="grid grid-cols-8 gap-2">
        {seats.map((seat) => (
          <button
            key={seat.maGhe}
            className={`p-2 border rounded ${
              selectedSeats.includes(seat) ? "bg-green-500" : "bg-gray-200"
            }`}
            onClick={() => toggleSeatSelection(seat)}
            disabled={seat.daDat}
          >
            {seat.tenGhe}
          </button>
        ))}
      </div>
      <Button className="mt-4" onClick={bookTickets} disabled={selectedSeats.length === 0}>
        Đặt vé
      </Button>
    </div>
  );
};

export default TicketBooking;
