import { CircularProgress } from '@mui/material'
import { useProducts } from '../../app/usecases/useProducts'
import  MainLayout  from '../layouts/MainLayout' 
import { ProductList } from '../presentation/ProductList'

export function ProductsPage() {
  const { data, isLoading } = useProducts()

  if (isLoading) return <CircularProgress />

  return (
    <MainLayout>
        <ProductList products={data ?? []} />
    </MainLayout>
  )
}
