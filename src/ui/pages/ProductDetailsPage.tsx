import { CircularProgress, Typography, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../app/usecases/useProducts';
import MainLayout from '../layouts/MainLayout';
import { useCartStore } from '../../app/store/useCartStore';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error al cargar el producto</Typography>;

  const product = data?.find((p) => p.id === parseInt(id ?? '', 10));

  if (!product) {
    return <Typography color="error">Producto no encontrado</Typography>;
  }

  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <MainLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
        <Typography variant="h6" color="primary">
          {product.category}
        </Typography>
        <Typography sx={{ mt: 2 }}>{product.description}</Typography>
      </Box>
      <Button 
        variant="contained" 
        fullWidth 
        onClick={() => addToCart(product)}
        sx={{ mt: 2 }}
      >
        Agregar
      </Button>
    </MainLayout>
  );
};

export default ProductDetailsPage;
