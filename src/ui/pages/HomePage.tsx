import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useProducts } from '../../app/usecases/useProducts';
import { ProductCard } from '../components/ProductCards/ProductCard';
import FiltersComponent from '../components/Filters/FiltersComponent';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <p>Cargando...</p> 
  if (error) return <p>Error al cargar productos</p>

  return (
    <MainLayout>
      <Box sx={{ p: 3 }}>
        <FiltersComponent  />

        <Grid container spacing={3}>
          {data?.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default HomePage