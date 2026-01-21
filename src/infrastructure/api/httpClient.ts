import axios from 'axios'

//Es parte de la capa de infraestructura
//Se crea una versión "preconfigurada de axios"
export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})