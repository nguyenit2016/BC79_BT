import axios from 'axios';
import { CYBER_TOKEN, https } from './config';

export const loginService = (user) => {
    // return axios({
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //     method: "POST",
    //     data: user,
    //     headers: {
    //         TokenCybersoft: CYBER_TOKEN
    //     }
    // })

    return https({
        url: "/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user
    });

    // return https.post("/api/QuanLyNguoiDung/DangNhap")
};