import { CircularProgress } from '@mui/material'
import { useProducts } from '../../app/usecases/useProducts'
import  MainLayout  from '../layouts/MainLayout' 
import { ProductList } from '../presentation/ProductList'

const ProductDetailsPage = () => {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <CircularProgress />

  return (
    <MainLayout>
        <ProductList products={data ?? []} />
    </MainLayout>
  )
}

export default ProductDetailsPage;
