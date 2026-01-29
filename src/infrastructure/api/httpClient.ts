import axios from 'axios'
import { useAuthStore } from '../../app/store/useAuthStore'

//Es parte de la capa de infraestructura
//Se crea una versión "preconfigurada de axios"
export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

httpClient.interceptors.request.use(config => {
    // Lee el token actual directamente del estado de Zustand
    const token = useAuthStore.getState().token;

    // Si existe el token, lo inyectamos en la cabecera Authorization
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});