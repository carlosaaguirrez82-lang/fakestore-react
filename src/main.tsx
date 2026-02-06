import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppQueryProvider } from './app/providers/QueryProvider'
import theme from './ui/styles/Theme'
import { ThemeProvider } from '@mui/material/styles' // 1. Importar el proveedor
import CssBaseline from '@mui/material/CssBaseline' // 2. Importar el reseteo de estilos


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppQueryProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </AppQueryProvider>
    </React.StrictMode>
)
