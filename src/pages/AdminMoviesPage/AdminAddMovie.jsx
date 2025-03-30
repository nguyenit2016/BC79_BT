import React, { useState } from 'react'
import { addMovie } from '../../api/movieService';
import {CYBER_TOKEN} from '../../api/config';

export default function AdminAddMovie() {
    let [hinhAnh, setHinhAnh] = useState({});

    let changeFile = (e) => {
        let file = e.target.files[0];
        console.log(file)
        setHinhAnh(file);
    }

    let handlAddMovie = () => {
        let formData = new FormData();
        formData.append("tenPhim", "11111111111111");
        formData.append("trailer", "giaTri");
        formData.append("moTa", "giaTri");
        formData.append("maNhom", "GP01");
        formData.append("ngayKhoiChieu", "10/10/2026");
        formData.append("sapChieu", true);
        formData.append("danChieu", true);
        formData.append("hot", true);
        formData.append("danhGia", "10");
        formData.append("hinhAnh", hinhAnh);

        const response = fetch("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh", {
            method: "POST",
            body: formData,
            headers: {
                    TokenCybersoft: CYBER_TOKEN
                }
        });
    }
    return (
        <div className='bg-white p-2'>
            <h2>Thêm mới phim</h2>
            <div className="mb-3 row g-3 ">
                <div className="col-auto col-sm-2">
                    <label htmlFor="tenPhim" className="col-form-label">Tên phim</label>
                </div>
                <div className="col-auto col-sm-10">
                    <input type="text" id="tenPhim" className="form-control" value="" />
                </div>
            </div>
            <div className="mb-3 row g-3">
                <div className="col-auto col-sm-2">
                    <label htmlFor="trailer" className="col-form-label">Trailer</label>
                </div>
                <div className="col-auto col-sm-10">
                    <input type="text" id="trailer" className="form-control" value="" />
                </div>
            </div>
            <div className="mb-3 row g-3">
                <div className="col-auto col-sm-2">
                    <label htmlFor="moTa" className="col-form-label">Mô tả</label>
                </div>
                <div className="col-auto col-sm-10">
                    <input type="text" id="moTa" className="form-control" value="" />
                </div>
            </div>
            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="ngayKhoiChieu" className="col-form-label">Ngày khởi chiếu</label>
                </div>
                <div className="col-auto">
                    <input type="date" id="ngayKhoiChieu" className="form-control" value="" />
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
                    <input type="text" id="danhGia" className="form-control" value="" />
                </div>
            </div>

            <div className="mb-3 row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="tenPhim" className="col-form-label">Hình ảnh</label>
                </div>
                <div className="col-auto">
                    <input onChange={changeFile} type="file" id="tenPhim" className="form-control" text="" />
                </div>
            </div>

            <button onClick={handlAddMovie} className='btn btn-success'>Thêm mới</button>
        </div>
    )
}
