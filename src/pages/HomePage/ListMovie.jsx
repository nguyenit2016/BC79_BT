import React, { useEffect, useState } from 'react'
import { Card, Popover } from 'antd'
import { listMovieService } from '../../api/movieService';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default function ListMovie() {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        listMovieService()
            .then((result) => {
                setMovies(result.data.content);
            }).catch((err) => {
            });
    }, []);
    const RenderMovieItem = () => {
        return movies.map((item) => {
            const description = (
                <Popover
                    content={<p className='w-80'>{item.moTa}</p>}
                >
                    <button className='cursor-pointer text-left'>
                        {
                            item.moTa.length > 80 ?
                            <span className='text-black'>{item.moTa.slice(0, 80) + " ... "} <span className='text-blue-500'>Xem thêm</span></span> :
                            <span className='text-black'>{item.moTa}</span>
                        }
                    </button>
                </Popover>
            )
            return (
                <Card key={item.maPhim} hoverable
                        cover={<img alt="example" src={item.hinhAnh} className='h-80 object-cover' />}>
                        <Meta title={item.tenPhim} description={description} />
                        <Link to={`/detail/${item.maPhim}`} className='text-xl !text-red-500'>Chi tiết</Link>
                    </Card>
            );
        });
    }

    return (
        <div className='grid grid-cols-5 gap-5 container'>
            {RenderMovieItem()}
        </div>
    )
}
