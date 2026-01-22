import axios from 'axios'

export const httpClient = axios.create({
    //baseURL: 'https://fakestoreapi.com',
baseURL: import.meta.env.VITE_API_URL,
headers: {
'Content-Type': 'application/json',
},
})