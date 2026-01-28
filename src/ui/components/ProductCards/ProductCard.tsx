import { Card, CardContent, CardMedia, Button, Typography, Box } from '@mui/material'
import type { Product } from '../../../domain/models/Product'
import { useCartStore } from '../../../app/store/useCartStore'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const addToCart = useCartStore((s) => s.addToCart)

  return (
    <Card sx={{ height: 400, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: 180, objectFit: 'contain', p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 'bold', 
              height: 48, 
              overflow: 'hidden', 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical' 
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary">${product.price}</Typography>
        </Box>
        <Button 
          variant="contained" 
          fullWidth 
          onClick={() => addToCart(product)}
          sx={{ mt: 2 }}
        >
          Agregar
        </Button>
      </CardContent>
    </Card>
  )
}