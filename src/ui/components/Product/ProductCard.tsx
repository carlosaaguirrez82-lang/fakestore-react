import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'
import type { Product } from '../../../domain/models/Product'
import { useCartStore } from '../../../app/store/useCartStore'
import './ProductCard.scss'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const addToCart = useCartStore((s) => s.addToCart)

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: { md: 'translateY(-4px)' },
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          height: 160,
          objectFit: 'contain',
          p: 1,
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          noWrap
          title={product.title}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="success.main"
          fontWeight={700}
          sx={{ mb: 1 }}
        >
          ${product.price}
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        fullWidth
        onClick={() => addToCart(product)}
        sx={{
          borderRadius: 0,
          mt: 'auto',
        }}
      >
        Agregar al carrito
      </Button>
    </Card>
  )
}
