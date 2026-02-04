import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainLayout from '../layouts/MainLayout';
import { useProducts } from '../../app/usecases/useProducts';
import { ProductCard } from '../components/ProductCards/ProductCard';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import FiltersComponent from '../components/Filters/FiltersComponent';
import { productApi } from '../../infrastructure/api/productApi'

const CategoryPage = () => {
  const { data, isLoading, error } = useProducts()
  const { categoryName } = useParams(); 

  if (isLoading) return <p>Cargando...</p> 
  if (error) return <p>Error al cargar productos</p>

  return (
    <MainLayout>
      <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            {categoryName}
          </Typography>
          <FiltersComponent  />
  
          <Grid container spacing={3}>
            {data?.filter((product) => product.category === categoryName).map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
    </MainLayout>
  )
}

export default CategoryPage