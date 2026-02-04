import { useEffect, useState } from 'react'
import { CircularProgress, Typography, Box, Button } from '@mui/material';
import { userApi } from '../../../infrastructure/api/userApi'
import { useAuthStore } from '../../../app/store/useAuthStore';
import MainLayout from '../../layouts/MainLayout'
import type { User } from '../../../domain/models/User'
import { id } from 'zod/v4/locales';

const UsersPage = () => {
  //const data = useAuthStore();
  const authenticatedUsername = useAuthStore((state) => state.user);
  const [SelectedUser, SetSelectedUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 3. Llamada a la API
    userApi.getAll()
      .then((allUsers) => {
        // 4. Buscamos al usuario que coincida con el del Store
        const foundUser = allUsers.find((u) => u.username === authenticatedUsername);
        
        if (foundUser) {
          SetSelectedUser(foundUser);
        }
      })
      .finally(() => {
        // 5. Quitamos el cargando independientemente de si lo encontró o no
        setLoading(false);
      });
  }, [authenticatedUsername]);


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!SelectedUser) {
    return (
      <MainLayout>
        <Box>
          <Typography>No se encontró información del perfil.</Typography>
        </Box>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Box>
        <Typography><strong>Usuario:</strong> {SelectedUser.username}</Typography>
          <Typography><strong>Email:</strong> {SelectedUser.email}</Typography>
      </Box>
    </MainLayout>
  )
}

export default UsersPage;
