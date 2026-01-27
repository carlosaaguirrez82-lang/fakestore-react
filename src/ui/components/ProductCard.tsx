import { Card, CardContent, CardMedia, Button, Typography} from '@mui/material'
import type { Product } from '../../domain/models/Product'
import { useCartStore } from '../../app/store/useCartStore'

interface Props {
    product: Product
}

export function ProductCard({ product }: Props) {
    const modQuantity = useCartStore((s) => s.modQuantity)

    return(
        <Card variant="outlined" key={product.id} sx={{ marginTop: 2 }}>
            <CardMedia>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>{product.category}</Typography>
                    <Typography variant='subtitle1'>{product.title}</Typography>
                    <Typography variant='body1'>$ {product.price}</Typography>
                    <Button onClick={() => modQuantity(product, '+')}>
                        Agregar
                    </Button>
                </CardContent>
            </CardMedia>
        </Card>
    )
}
