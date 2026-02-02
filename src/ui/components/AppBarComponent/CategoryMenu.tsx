import Box from '@mui/material/Box';
import { IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CategoryMenu = () => {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

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
  
  const handleOnClick = () => {
    handleMobileMenuClose();
    navigate('/category');
  }

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
      <MenuItem onClick={handleOnClick}>Mejor puntuados</MenuItem>
      <MenuItem onClick={handleOnClick}>Últimas piezas</MenuItem>
      <MenuItem onClick={handleOnClick}>Precio especial</MenuItem>
      <MenuItem onClick={handleOnClick}>Tecnología</MenuItem>
      <MenuItem onClick={handleOnClick}>Joyería</MenuItem>
      <MenuItem onClick={handleOnClick}>Ropa para dama</MenuItem>
      <MenuItem onClick={handleOnClick}>Ropa para caballero</MenuItem>
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