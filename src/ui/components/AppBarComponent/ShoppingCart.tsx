import { IconButton, Badge } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const ShoppingCart = () => {
  return (
    <IconButton
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