import Box from '@mui/material/Box';
import { IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const CategoryMenu = () => {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mejor puntuados</MenuItem>
      <MenuItem onClick={handleMenuClose}>Últimas piezas</MenuItem>
      <MenuItem onClick={handleMenuClose}>Precio especial</MenuItem>
      <MenuItem onClick={handleMenuClose}>Tecnología</MenuItem>
      <MenuItem onClick={handleMenuClose}>Joyería</MenuItem>
      <MenuItem onClick={handleMenuClose}>Ropa para dama</MenuItem>
      <MenuItem onClick={handleMenuClose}>Ropa para caballero</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <Box>
        <IconButton
          size="large"
          aria-label="show categories"
          aria-controls={menuId} 
          aria-haspopup="true"
          onClick={handleProfileMenuOpen} 
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {renderMenu}
    </Box>
  );
}

export default CategoryMenu