import { Box, Typography } from '@mui/material'

export const LoadingScreen = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
            <img
                src="https://raw.githubusercontent.com/steve1316/gfl-database/master/src/images/tdolls/57/animations/57_mod_move.gif" // Tu URL del GIF aquí
                alt="Cargando..."
                style={{ width: '100px' }} // Controlas el tamaño con estilos normales
            />
            <Typography variant="body1">Cargando...</Typography>
        </Box>
    )
}

