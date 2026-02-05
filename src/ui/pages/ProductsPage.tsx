import MainLayout from "../layouts/MainLayout";
import { Card, CardContent, Typography, Grid, Box, Fade } from '@mui/material';
import { useProducts } from '../../app/useCases/useProducts';
import { LoadingScreen } from "../components/LoadingScreen";
import { ProductCard } from "../components/ProductCard";
import { useParams } from "react-router-dom";


const ProductsPage = () => {
    const { data, isLoading } = useProducts();
    const { category } = useParams();
    const filteredProducts = category ? data?.filter((product) => product.category === category) : data;

    return (
        <MainLayout>
            <Typography variant="h2">Productos</Typography>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <Fade in={!isLoading} timeout={1000}>
                    <Grid container spacing={4} >
                        {filteredProducts?.map((product) => (
                            <Grid size={{ xs: 12, sm: 5, md: 3 }} key={product.id}>{/*Determina qué ancho tomárá cada card 
                        dependiendo del ancho de la pantalla
                        xs: extraSmall, (móviles)
                        sm: small (tablets)
                        md: medium (escritorio)
                    */}
                                <ProductCard product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            )}
        </MainLayout>
    );
}

export default ProductsPage;