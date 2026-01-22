import MainLayout from '../layouts/MainLayout'
import { Card, CardContent, Typography } from '@mui/material' //todo componente
import { useProducts } from '../../app/usecases/useProducts'

const ProductsPage = () => {
  const { data, isLoading, error } = useProducts()

  //todo crear un comopnente para loader
   if (isLoading) return <p>Cargando...</p> 
  //todo crear un componente para error 
  if (error) return <p>Error al cargar productos</p>
  //todo crear un componente para producto tipo card
/**
 * * <Card product={product}/>**/

  return (
       <MainLayout>
           <Typography variant="h5">Productos</Typography>
           {data?.map((product) => (
          <Card key={product.id} sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography>{product.title}</Typography>
              <Typography>${product.price}</Typography>
            </CardContent>
          </Card>
        ))}
       </MainLayout>
  );
}

export default ProductsPage;
