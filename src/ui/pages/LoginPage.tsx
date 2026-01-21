import { useAuthStore } from '../../app/store/useAuthStore'
//Es parte de la capa UI (User Interface)
//Es la primera parte de la delegación de responsabilidades donde ya hace algo la aplicación,
// encargándose solo de mostrar los datos y 
//enviar los datos a otras áreas para su procesamiento
export function LoginPage() {
    const login = useAuthStore((state) => state.login)//Aquí llamaría al inicio de sesión

    //Envía los datos al método login. 
    const handleLogin = async (user: string, psw: string) => {
        await login(user, psw)
    }

    const usuarios = 'mor_2314';
    const pasw = '83r5^_';

    return (
        <div>
            <h2>Login</h2>
            <button onClick={() => handleLogin(usuarios, pasw)}>Login FakeStore con funcion flecha</button>
        </div>
    )
}