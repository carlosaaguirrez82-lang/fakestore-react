import MainLayout from "../layouts/MainLayout";
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useProducts } from '../../app/useCases/useProducts';


const ProductsPage = () => {
    const { data, isLoading, error } = useProducts();

    if (isLoading) return (
        <MainLayout>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <img
                    src="https://raw.githubusercontent.com/steve1316/gfl-database/master/src/images/tdolls/57/animations/57_mod_move.gif" // Tu URL del GIF aquí
                    alt="Cargando..."
                    style={{ width: '100px' }} // Controlas el tamaño con estilos normales
                />
            </Box>
        </MainLayout>
    )


    return (
        <MainLayout>
            <Typography variant="h2">Productos</Typography>
            <Grid container spacing={4} >
                {data?.map((product) => (
                    <Grid size={{ xs: 12, sm: 5, md: 3}} key={product.id}>{/*Determina qué ancho tomárá cada card 
                        dependiendo del ancho de la pantalla
                        xs: extraSmall, (móviles)
                        sm: small (tablets)
                        md: medium (escritorio)
                    */}
                        <Card variant="outlined" key={product.id} sx={{ marginTop: 2 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>{product.category}</Typography>
                                <Typography variant="h5">{product.title}</Typography>
                                <Typography variant="body2">${product.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </MainLayout>

    );
}

export default ProductsPage;