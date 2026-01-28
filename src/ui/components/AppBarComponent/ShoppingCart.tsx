import { Button, IconButton, Badge } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../../app/store/useCartStore';
const ShoppingCart = () => {

    const totalItems = useCartStore((s) =>
      s.items.reduce((acc, item) => acc + item.quantity, 0)
    )
  const navigate = useNavigate();
  const handleShoppingCart = () => {
    console.log('Carrito de compras clickeado');
    navigate('/cart');
  }
  return (

      <IconButton onClick={handleShoppingCart}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="error">
            <LocalGroceryStoreIcon />
          </Badge>
    </IconButton>
    
  )
}

export default ShoppingCart