import { useEffect, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import { userApi } from '../../infrastructure/api/userApi'
import MainLayout from '../layouts/MainLayout'
import type { User } from '../../domain/models/User'

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        userApi.getAll().then(setUsers)
    }, [])
    return (
        <MainLayout>
            <Typography variant='h2'>Usuarios</Typography>
            <ul>
                {users.map((u) => (
                    <Card key={u.id}>{/*Contenedor de la tarjeta */}
                        <CardContent>{/*Zona de texto principal */}
                            <Typography>{u.name.firstname} {u.name.lastname}</Typography>
                            <Typography>{u.username} - {u.email}</Typography>
                            <Typography>Password: {u.password}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </ul>
        </MainLayout>
    )
}

export default UsersPage;