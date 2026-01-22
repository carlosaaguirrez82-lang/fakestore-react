import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useAuthStore } from '../../app/store/useAuthStore';

export function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    // Evitamos que el navegador recargue la página
    e.preventDefault(); 
    setError(null);

    try {
      console.log("Conectando con la API...");
      
      // Enviamos las credenciales al Store (Capa de Aplicación)
      // .trim() elimina espacios accidentales que causan errores 401
      await login({ 
        username: username.trim(), 
        password: password.trim() 
      });

      console.log("Login exitoso");
      
      // 3. Si todo sale bien, navegamos
      navigate('/users');
      
    } catch (err) {
      // 4. Si la API falla, capturamos el error para mostrarlo en la UI
      console.error("Error:", err);
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login FakeStore
        </Typography>
        
        {/* El onSubmit debe estar vinculado a la función handleLogin */}
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nombre de Usuario"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Si hay error, mostramos la alerta de Material UI */}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}