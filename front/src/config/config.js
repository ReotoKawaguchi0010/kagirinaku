import axios from "axios";

export const API_ROOT_URL = 'http://localhost:8000/api';

export const create = axios.create({
    baseURL: API_ROOT_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json',
    xsrfHeaderName: 'X-CSRF-Token',
    withCredentials: true,
})


export const usePost = axios.create({
    baseURL: API_ROOT_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json',
    xsrfHeaderName: 'X-CSRF-Token',
    withCredentials: true,
})

export const useGet = axios.create({
    baseURL: API_ROOT_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json',
})