import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../app/store/useAuthStore'

export function LoginPage() {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()

    const handleLogin = async (user:string , psw:string) => {
        await login(user,psw)
        navigate('/products')
    }

return (
<div>
<h2>Login</h2>
<button onClick={()=>handleLogin('mor_2314','83r5^_')}>Login FakeStore</button>
</div>
)
}