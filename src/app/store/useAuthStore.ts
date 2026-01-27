import { create } from 'zustand'
import { authApi } from '../../infrastructure/api/authApi'

interface AuthState {
    token: string | null
    isAuthenticated: boolean
    isHydrated: boolean
    login: (username: string, password: string) => Promise<void>
    logout: () => void
    hydrate: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,
    isHydrated: false,

    login: async (username, password) => {
    const { token } = await authApi.login(username, password)
    
    localStorage.setItem('token', token)
    
    set({ token, 
          isAuthenticated: true,
          isHydrated: true,
        })
    },
    
    logout: () => set({ token: null, 
                        isAuthenticated: false , 
                        isHydrated: true,}),

    hydrate: () => {
    const token = localStorage.getItem('token')
    if (token) {
      set({ token, isAuthenticated: true,  isHydrated: true, })
    }else{
        set({ isHydrated: true })
    }
  },

}))