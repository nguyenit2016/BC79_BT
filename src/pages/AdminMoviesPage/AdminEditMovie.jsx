import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovieService } from '../../api/movieService';

export default function AdminEditMovie() {
    let { maPhim } = useParams();
    let [movie, setMovie] = useState({});

    useEffect(() => {
        getDetailMovieService(maPhim)
        .then((result) => {
            setMovie(result.data.content);
        }).catch((err) => {
            
        });
    }, []);

    return (
        <div className='bg-white p-2'>
            <div className="mb-3 row g-3 ">
                <div className="col-auto col-sm-2">
                    <label htmlFor="tenPhim" className="col-form-label">Tên phim</label>
                </div>
                <div className="col-auto col-sm-10">
                    <input type="text" id="tenPhim" className="form-control" value={movie.tenPhim} />
                </div>
            </div>
            <div className="mb-3 row g-3">
                <div className="col-auto col-sm-2">
                    <label htmlFor="trailer" className="col-form-label">Trailer</label>
                </div>
                <div className="col-auto col-sm-10">
                    <input type="text" id="trailer" className="form-control" value={movie.trailer} />
                </div>
            </div>
            <div className="mb-3 row g-3">
                <div className="col-auto col-sm-2">
                    <label htmlFor="moTa" className="col-form-label">Mô tả</label>
                </div>
                <div className="col-auto col-sm-10">
                    <input type="text" id="moTa" className="form-control" value={movie.moTa} />
                </div>
            </div>
            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="ngayKhoiChieu" className="col-form-label">Ngày khởi chiếu</label>
                </div>
                <div className="col-auto">
                    <input type="date" id="ngayKhoiChieu" className="form-control" value={movie.ngayKhoiChieu} />
                </div>
            </div>
            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="dangChieu" className="col-form-label">Đang chiếu</label>
                </div>
                <div className="col-auto form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="dangChieu" />
                </div>
            </div>
            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="sapChieu" className="col-form-label">Sắp chiếu</label>
                </div>
                <div className="col-auto form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="sapChieu" />
                </div>
            </div>
            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="hot" className="col-form-label">Hot</label>
                </div>
                <div className="col-auto form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="hot" />
                </div>
            </div>
            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="danhGia" className="col-form-label">Số sao</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="danhGia" className="form-control" value={movie.danhGia} />
                </div>
            </div>

            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="tenPhim" className="col-form-label">Hình ảnh</label>
                </div>
                <div className="col-auto">
                    <input type="file" id="tenPhim" className="form-control" text={movie.hinhAnh} />
                </div>
            </div>

            <button className='btn btn-success'>Cập nhật</button>
        </div>
    )
}
