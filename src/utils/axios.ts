import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const instance: AxiosInstance = axios.create({
  baseURL: `http://10.190.241.162:8090`,
  timeout: 5000,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});
const token = Cookies.get('access_token');
console.log(token);

if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    const res = response;
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
