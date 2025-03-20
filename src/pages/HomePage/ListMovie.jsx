import React, { useEffect, useState } from "react";
import { Card, Rate } from "antd";
import { listMovieService } from "../../api/movieService";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function ListMovie() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listMovieService()
      .then((result) => {
        setMovies(result.data.content.slice(0, 10)); // Lấy 10 phim
      })
      .catch((err) => {
        console.error("Lỗi khi lấy danh sách phim:", err);
      });
  }, []);

  const RenderMovieItem = () => {
    return movies.map((item) => (
      <Card
        key={item.maPhim}
        hoverable
        onClick={() => navigate(`/detail/${item.maPhim}`)}
        cover={<img alt={item.tenPhim} src={item.hinhAnh} className="h-80 object-cover" />}
        className="cursor-pointer flex flex-col justify-between h-full"
      >
        {/* Tên phim có chiều cao cố định */}
        <p className="text-lg font-bold text-center h-12 flex items-center justify-center">
          {item.tenPhim}
        </p>

        {/* Đánh giá sao giữ trên 1 hàng ngang */}
        <div className="flex justify-center items-center mt-2 w-full whitespace-nowrap">
          <Rate
            allowHalf
            value={item.danhGia / 2}
            disabled
            className="text-yellow-500 text-sm flex"
          />
          <span className="text-gray-600 text-xs ml-2">({item.danhGia}/10)</span>
        </div>
      </Card>
    ));
  };

  return (
    <div className="grid grid-cols-5 gap-5 container mx-auto py-5">
      {RenderMovieItem()}
    </div>
  );
}
