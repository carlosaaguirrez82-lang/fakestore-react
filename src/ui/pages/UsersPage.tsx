import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userApi } from '../../infrastructure/api/userApi'
import MainLayout from '../layouts/MainLayout'
import type { User } from '../../domain/models/User'
import { useAuthStore } from '../../app/store/useAuthStore'

export function UsersPage() {
    const [users, setUsers] = useState<User[]>([])
    const logOut = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleReturnLogin = () => {
        navigate('/login');
        setTimeout(() => {
            logOut();
        }, 100)
    };

    useEffect(() => {
        userApi.getAll().then(setUsers)
    }, [])
    return (
        <MainLayout>
            <h2>Usuarios</h2>
            <button onClick={handleReturnLogin}>Cerrar Sesión</button>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.username}</li>
                ))}
            </ul>
        </MainLayout>
    )
}
