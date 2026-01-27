import { useCartStore } from '../../app/store/useCartStore'
import { Typography, Box, Button, Card, CardContent } from '@mui/material';
import { LoadingScreen } from '../components/LoadingScreen';
import MainLayout from '../layouts/MainLayout'

export function CartPage() {
    const { items, removeFromCart, clearCart, modQuantity} = useCartStore();

    return (
        <MainLayout>
            <Typography variant='h2'>Carrito</Typography>
            {items.map((item) => (
                <Card key={item.id}>
                    <CardContent>
                            <Typography variant='body1'>{item.title}: </Typography>
                            <Button onClick={() => modQuantity(item, '+') }>+</Button>{item.quantity}<Button onClick={() => modQuantity(item,'-') }>-</Button>
                            <Button onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                    </CardContent>
                </Card>

            ))}

            {items.length > 0 && <Button onClick={clearCart}> Vaciar Carrito </Button>}
        </MainLayout>
    )
}
