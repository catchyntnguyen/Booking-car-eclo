import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'https://eclo-production.up.railway.app/api/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để tự động thêm token vào header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Hàm để thực hiện GET yêu cầu
const fetchData = async (url)=> {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        return [];
      }
      else if (error.response && error.response.status === 401) {
        window.location.href = '/login';
      }
      else {
        console.error('Error fetching data:', error.message);
        throw error;
      }
      
    }
    throw new Error('An unexpected error occurred');
  }
};

// Hàm để thực hiện POST yêu cầu nếu cần
const postData = async (url, data)=> {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const deleteData = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const putData = async () => {
  try {
    const response = await axiosInstance.put(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Định nghĩa các hàm API
// export const getChapters = () => fetchData('chapters');



