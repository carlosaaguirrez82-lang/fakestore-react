import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../app/store/useAuthStore'
import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import styles from './LoginPage.module.scss'

//Es parte de la capa UI (User Interface)
//Es la primera parte de la delegación de responsabilidades donde ya hace algo la aplicación,
// encargándose solo de mostrar los datos y 
//enviar los datos a otras áreas para su procesamiento
export function LoginPage() {
    const login = useAuthStore((state) => state.login)//Aquí llamaría al inicio de sesión
    const navigate = useNavigate();//Es una herramienta para navegar o cambiar el elemento que se muestra en el DOM

    const usuarios = 'mor_2314';
    const pasw = '83r5^_';

    //Envía los datos al método login. 
    const handleLogin = async () => {
        await login(usuarios, pasw);//Espera la respuesta de login
        navigate('/users')
    }



    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <Typography variant='h4' component='h2'>Login</Typography>
                <div className={styles.formGroup}>
                    <TextField
                        label="Usuario"
                        variant="outlined"
                        fullWidth
                        //value={username}
                        //onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <TextField
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        //value={password}
                        //onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button variant='contained' onClick={handleLogin}>Login FakeStore</Button>
            </div>
        </div>

    )
}