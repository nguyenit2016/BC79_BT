import axios from "axios";
import { store } from "../main";
import { hideLoading, showLoading } from "../redux/loadingSlice";

export const CYBER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";
const userJson = localStorage.getItem("USER");

export const https = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn",
    headers: {
        TokenCybersoft: CYBER_TOKEN,
        Authorization: userJson?.accessToken
    }
})

// axios interceptors
// Add a request interceptor
https.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        store.dispatch(showLoading());
        return config;
    },
    function (error) {
        // Do something with request error
        store.dispatch(hideLoading());
        return Promise.reject(error);
    });

// Add a response interceptor
https.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        store.dispatch(hideLoading());
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        store.dispatch(hideLoading());
        return Promise.reject(error);
    });