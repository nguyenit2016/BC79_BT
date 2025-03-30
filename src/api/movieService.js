import axios from 'axios';
import { CYBER_TOKEN, https } from './config';

export const listMovieService = () => {
    // return axios({
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //     method: "GET",
    //     headers: {
    //         TokenCybersoft: CYBER_TOKEN
    //     }
    // })

    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
}

export const getDetailMovieService = (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
}

export const deleteMovie = (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
}

export const getRap = () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
}

export const getCumRap = (maRap) => {
    return https.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`);
}

export const createShowTime = (lich) => {
    return https.post(`/api/QuanLyDatVe/TaoLichChieu`, {
        "maPhim": lich.maPhim,
        "ngayChieuGioChieu": lich.ngayChieuGioChieu,
        "maRap": lich.maRap,
        "giaVe": lich.giaVe
    });
}

export const addMovie = (movie) => {
    return https({
        url: "/api/QuanLyPhim/ThemPhimUploadHinh",
        method: "POST",
        body: movie
    });
};