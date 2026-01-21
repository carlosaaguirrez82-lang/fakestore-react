import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../app/store/useAuthStore'

export function LoginPage() {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()

    const handleLogin = async () => {
    await login('mor_2314', '83r5^_')
    navigate('/users')
  }

return (
<div>
<h2>Login</h2>
<button onClick={handleLogin}>Login FakeStore</button>
</div>
)
}