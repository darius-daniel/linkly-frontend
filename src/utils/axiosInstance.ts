import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://linkly-1xxj.onrender.com:5000',
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
