import axios from 'axios';

const baseURL = 'http://localhost:5050/api/v1';

const api = axios.create({
    baseURL,
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default api;