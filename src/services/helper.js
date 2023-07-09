import axios from "axios";
// changes based on the environment(developmet, local, production)
export const BASE_URL = 'http://localhost:8081';

export const myAxios = axios.create({
    baseURL : BASE_URL
});