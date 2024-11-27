import axios from 'axios';

// export const baseURL =
//     process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/v1' : 'https://tweeter-hootspy.onrender.com/api/v1';

export default axios.create({
    baseURL : 'https://tweeter-hootspy.onrender.com/api/v1',
});

export const axiosPrivate = axios.create({
    baseURL: 'https://tweeter-hootspy.onrender.com/api/v1',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
