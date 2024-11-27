import axios from 'axios';

export const baseURL = 'https://tweeter-hootspy.onrender.com/api/v1';

export default axios.create({
    baseURL,
});

export const axiosPrivate = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
