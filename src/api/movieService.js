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