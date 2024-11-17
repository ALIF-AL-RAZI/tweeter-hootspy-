import axios from 'axios';

export const baseURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/v1' : 'https://twr-dm-server.onrender.com/api/v1';

export default axios.create({
    baseURL
});

export const axiosPrivate = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
