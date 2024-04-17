import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://linkly-1xxj.onrender.com',
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
