import { Button, IconButton, Badge } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useNavigate } from 'react-router-dom';
const ShoppingCart = () => {

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
          <Badge>
            <LocalGroceryStoreIcon />
          </Badge>
    </IconButton>
    
  )
}

export default ShoppingCart