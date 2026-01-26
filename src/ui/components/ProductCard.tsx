import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material'
//import { Product } from '../domain/models/Product'
import type { Product } from '../../domain/models/Product'
import { useCartStore } from '../../app/store/useCartStore'

interface Props {
  product: Product
  
}

export function ProductCard({ product }: Props) {
  const addToCart = useCartStore((s) => s.addToCart)

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="subtitle1">{product.title}</Typography>
        <Typography variant="body2">${product.price}</Typography>
        <Button fullWidth onClick={() => addToCart(product)}>
          Agregar
        </Button>
      </CardContent>
    </Card>
  )
}
