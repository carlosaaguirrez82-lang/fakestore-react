import { create } from 'zustand'
import { authApi } from '../../infrastructure/api/authApi'
// Importamos la interfaz LoginCredentials
import type { LoginCredentials } from '../../domain/models/Auth';

interface AuthState {
    token: string | null
    isAuthenticated: boolean
    // Modificamos el método login para que use LoginCredentials
    // La función recibe un objeto credentials con username y password
    // usamos  Promise<void> porque es una función asíncrona que no devuelve nada, esto para que  el estado no guarde las credenciales.
    login: (credentials: LoginCredentials) => Promise<void>
    //login: (username: string, password: string) => Promise<void>
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,

    login: async (credentials) => {
    // login: async (username, password) => {
    const { token } = await authApi.login(credentials.username, credentials.password);
    // const { token } = await authApi.login(username, password)
    set({ token, isAuthenticated: true })
    },
    
    logout: () => set({ token: null, isAuthenticated: false }),
}))