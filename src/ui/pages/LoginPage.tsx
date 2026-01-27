import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Paper,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './login.schema'
import type { LoginFormData } from './login.schema'
import { useAuthStore } from '../../app/store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function LoginPage() {
  const login = useAuthStore((s) => s.login)
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
   try {
    const cleanUsername = data.username.trim()
    data.username = cleanUsername    
    await login(data.username, data.password)
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (error: any) {
    setError('root', {
      type: 'manual',
      message: error.message,
    })
  }

  }

    useEffect(() => {
    if (isAuthenticated) {
      navigate('/products', { replace: true })
    }
  }, [isAuthenticated, navigate])


  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 3 }}>
        <Typography variant="h6" textAlign="center" mb={2}>
          Iniciar sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Usuario"
            fullWidth
            margin="normal"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mt: 2 }}
          >
            Entrar
          </Button>
        </Box>
        {errors.root && (
        <Typography color="error" variant="body2" mt={1}>
        {errors.root.message}
        </Typography>
      )}
      </Paper>
    </Container>
  )
}
