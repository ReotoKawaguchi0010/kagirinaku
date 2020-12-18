import axios from "axios";

export const API_ROOT_URL = 'http://localhost:8000/api';

export const create = axios.create({
    baseURL: API_ROOT_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})