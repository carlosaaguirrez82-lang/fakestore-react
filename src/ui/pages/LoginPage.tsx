import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useAuthStore } from '../../app/store/useAuthStore';
import '../../ui/styles/LoginPage.css';

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
      
      // Si todo sale bien, redirige a usuarios
      navigate('/home');
      
    } catch (err) {
      // Si la API falla, capturamos el error para mostrarlo en la UI
      console.error("Error:", err);
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box className="login-container">
        <Typography component="h1" variant="h5" className="login-title">
          FakeStore Login
        </Typography>
        
        <Box component="form" onSubmit={handleLogin} className="login-form">
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

          {error && (
            <Alert severity="error" className="login-error-alert">
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="login-button"
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}