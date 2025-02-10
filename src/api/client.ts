import axios from "axios";

export const client = axios.create({
    baseURL: import.meta.env.VITE_APU_BASE_URL,
});

client.interceptors.response.use((response) => response.data);