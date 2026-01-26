import { Grid, CircularProgress } from '@mui/material'
import { useProducts } from '../../app/usecases/useProducts'

const ProductDetailsPage = () => {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <CircularProgress />

  return (
    <MainLayout>
      <Grid container spacing={2}>
        {data?.map((product) => (
          <Grid size={{ xs:12, sm:6, md:4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default ProductDetailsPage;
