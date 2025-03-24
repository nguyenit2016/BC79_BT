import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {getDetailMovieService, getRap, getCumRap, createShowTime} from '../../api/movieService';

export default function AdminShowTime() {
    let { maPhim } = useParams();
    let [movie, setMovie] = useState({});
    let [rap, setRap] = useState([]);
    let [cumRap, setCumRap] = useState([]);
    useEffect(() => {
        getDetailMovieService(maPhim)
            .then((result) => {
                setMovie(result.data.content);
            })
            .then(() => {
                getRap().then((result) => {
                    setRap(result.data.content);
                }).catch((err) => {

                });
            })
            .catch((err) => {

            });
    }, []);
    let renderRap = () => {
        return rap.map((item, index) => {
            return <option value={item.maHeThongRap} >{item.tenHeThongRap}</option>
        })
    }
    let renderCumRap = () => {
        return cumRap.map((item, index) => {
            return <option value={item.maCumRap} >{item.tenCumRap}</option>
        })
    }
    let handlTaoLichChieu = () => {
        let lich = {
            maPhim: maPhim,
            ngayChieuGioChieu: document.getElementById("ngayChieuGioChieu").value,
            maRap: document.getElementById("maRap").value,
            giaVe: document.getElementById("giaVe").value,
        }
        console.log(lich);
        createShowTime(lich)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            
        });
    }
    let handlChangeRap = (e) => {
        console.log(e.target.value);
        getCumRap(e.target.value)
        .then((result) => {
            console.log(result.data.content);
                setCumRap(result.data.content);
        })
        .catch((err) => {

        })
}
return (
    <div>
        <h2>Tạo lịch chiếu - {movie.tenPhim} {movie.maPhim}</h2>
        <img className='w-40' src={movie.hinhAnh} alt="" />

        <div className="mb-3 row g-3 ">
            <div className="col-auto col-sm-2">
                <label htmlFor="tenPhim" className="col-form-label">Hệ thống rạp</label>
            </div>
            <div className="col-auto col-sm-2">
                <select className="form-select" aria-label="Default select example" onChange={handlChangeRap}>
                    <option value="1" selected>Chọn hệ thống rạp</option>
                    {rap && renderRap()}
                </select>
            </div>
        </div>
        <div className="mb-3 row g-3 ">
            <div className="col-auto col-sm-2">
                <label htmlFor="tenPhim" className="col-form-label">Cụm rạp</label>
            </div>
            <div className="col-auto col-sm-2">
                <select id='maRap' className="form-select" aria-label="Default select example">
                    <option value="1" selected>Chọn cụm rạp</option>
                    {cumRap && renderCumRap()}
                </select>
            </div>
        </div>
        <div className="mb-3 row g-3 align-items-center">
            <div className="col-auto col-sm-2">
                <label htmlFor="ngayChieuGioChieu" className="col-form-label">Ngày giờ chiếu</label>
            </div>
            <div className="col-auto col-sm-2">
                <input type="datetime-local" id="ngayChieuGioChieu" className="form-control" />
            </div>
        </div>
        <div className="mb-3 row g-3 ">
            <div className="col-auto col-sm-2">
                <label htmlFor="giaVe" className="col-form-label">Giá vé</label>
            </div>
            <div className="col-auto col-sm-2">
                <input type="text" id="giaVe" className="form-control"  />
            </div>
        </div>

        <button onClick={handlTaoLichChieu} className='btn btn-success'>Tạo lịch chiếu</button>
    </div>
)
}
