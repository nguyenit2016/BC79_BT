import React, { useEffect, useState } from 'react'
import {listMovieService, deleteMovie} from '../../api/movieService';
import { Link } from 'react-router-dom';

export default function AdminListMovie() {
    let [movies, setMovies] = useState([]);
    let handlDeleteMovie = (maPhim) => {
        deleteMovie(maPhim)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            
        });
    }

    useEffect(() => {
        listMovieService()
            .then((result) => {
                setMovies(result.data.content);
            }).catch((err) => {
            });
    }, []);
    const RenderMovieItem = () => {
        return movies.map((item, index) => {
            return (
                <tr key={index}>
                    <th>{item.maPhim}</th>
                    <td style={{width: '100px'}}><img src={item.hinhAnh} alt="" /></td>
                    <td>{item.tenPhim}</td>
                    <td>{item.moTa.slice(0, 100) + " ... "}</td>
                    <td>
                        <Link to={`/admin/films/edit/${item.maPhim}`}>Edit</Link>
                    </td>
                    <td><button className='btn btn-danger' onClick={() => handlDeleteMovie(item.maPhim)}>Delete</button></td>
                    <td>
                        <Link to={`/admin/films/showtime/${item.maPhim}`}>Show time</Link>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className=' bg-white'>
            <div className='mb-3'>
                <h3>Quản lý phim</h3>
                <i className="bi bi-search"></i>
                <Link className='nav-link text-blue-500 mb-4' to='/admin/films/addnew'>Thêm phim</Link>
                <div className="input-group mb-2">
                    <input type="text" className="form-control" placeholder="Input search text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className=''>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mã phim</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên phim</th>
                            <th scope="col">Mô tả</th>
                            <th colSpan={2}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RenderMovieItem()}
                    </tbody>
                </table>

            </div>
        </div>

    )
}
