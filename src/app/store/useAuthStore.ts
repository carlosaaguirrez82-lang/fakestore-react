import { create } from 'zustand'
import { authApi } from '../../infrastructure/api/authApi'

interface AuthState {
    token: string | null
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,

    login: async (username, password) => {
    const { token } = await authApi.login(username, password)
    set({ token, isAuthenticated: true })
    },
    
    logout: () => set({ token: null, isAuthenticated: false }),
}))