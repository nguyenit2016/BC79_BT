import axios from 'axios';
import { CYBER_TOKEN, https } from './config';

export const bookingService = (maLichChieu) => {

    return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
}