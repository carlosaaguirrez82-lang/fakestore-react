import { create } from 'zustand'
import { authApi } from '../../infrastructure/api/authApi'

//Es parte de la capa app
//Crea una interface, que declara que solo se tendrán las variables que estan especificadas
interface AuthState {
    token: string | null
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

//Crea un hook personalizado
                            //con el create crea el hook con la estructura de arriba
                            //(set) retorna el objeto que será el "Almacén global", que contendrá los datos con
                            //la estructura de arriba
export const useAuthStore = create<AuthState>((set) => ({
    //Estado incial de los campos
    token: null,
    isAuthenticated: false,

    login: async (username, password) => {
        //Con esta línea llama a authApi y ejecuta su método login y espera su respuesta.
        const { token } = await authApi.login(username, password)

        // 'set' guarda el resultado en la "Nube". Y cambia el valor de isAuthenticated a true en toda la aplicación
        //Es decir, avisa a todos los componentes que usan este hook para que se re-renderizen
        set({ token, isAuthenticated: true })// set es una herramienta de zustand, hace que React sepa que el token cambió
    },//Así es como se haría el inicio de sesión

    //Así sería un cierre de sesión
    logout: () => set({ token: null, isAuthenticated: false }),//Sirve para resetear los valores, es decir, sus valores iniciales
}))