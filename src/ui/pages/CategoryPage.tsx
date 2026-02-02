import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MainLayout from '../layouts/MainLayout'
import { useProducts } from '../../app/usecases/useProducts'
import { ProductCard } from '../components/ProductCards/ProductCard'
import { Typography } from '@mui/material'

const CategoryPage = () => {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <p>Cargando...</p> 
  if (error) return <p>Error al cargar productos</p>

  return (
    <MainLayout>
      <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Categorías
          </Typography>
          <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
            <div>Buscador *</div>
            <div>Filtro por precio *</div>
            <div>Filtro por rating *</div>
          </Box>
    
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

export default CategoryPage