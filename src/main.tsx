import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppQueryProvider } from './app/providers/QueryProvider'
import './styles/main.scss'

//ReactDOM es el que se encarga de coordinar o unir el document HTML con el resto de la aplicación
//Se utiliza el ! para decirle a createRoot que siempre va a existir el elemento 'root', 
// de lo contrario typeScript marcaría un error de que el elemento root puede no existir y terminaría provocando un null
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*En app es donde se ejecutará la aplicación  dentro de root*/}
        <AppQueryProvider>{/*Proveerá datos para la app*/}
            <App />
        </AppQueryProvider>
    </React.StrictMode>
)
