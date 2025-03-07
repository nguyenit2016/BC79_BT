import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovieService } from '../../api/movieService';
import { Rate } from 'antd';

export default function DetailMoviePage() {
    let { maPhim } = useParams();
    let [movieDetail, setMovieDetail] = useState({});
    useEffect(() => {
        getDetailMovieService(maPhim)
            .then((result) => {
                console.log(result.data.content)
                setMovieDetail(result.data.content);
            }).catch((err) => {

            });
    }, [])

    return (
        <div className='container'>
            <p>{movieDetail.tenPhim}</p>
            <img className='h-100' src={movieDetail.hinhAnh} alt="" />
            {movieDetail.danhGia && <Rate disabled defaultValue={movieDetail.danhGia} />}
        </div>
    )
}
