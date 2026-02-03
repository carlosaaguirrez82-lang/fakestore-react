import Box from '@mui/material/Box';
import { IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../app/usecases/useProducts';
import { useParams } from 'react-router-dom';



const CategoryMenu = () => {
  
  const { id } = useParams<{ id: string }>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const [SelectedCategory, setSelectedCategory] = useState<string>('');
  const { data } = useProducts();
  const product = data?.find((p) => p.id === parseInt(id ?? '', 10));

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
  
  const handleOnClick = (categoryName: string) => {
    handleMobileMenuClose();
    setSelectedCategory(categoryName)
    navigate(`/category/${categoryName}`);
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
      <MenuItem onClick={() => handleOnClick("better_ratings")}>Mejor puntuados</MenuItem>
      <MenuItem onClick={() => handleOnClick("latest_pieces")}>Últimas piezas</MenuItem>
      <MenuItem onClick={() => handleOnClick("sales")}>Precio especial</MenuItem>
      <MenuItem onClick={() => handleOnClick("electronics")}>Tecnología</MenuItem>
      <MenuItem onClick={() => handleOnClick("jewelery")}>Joyería</MenuItem>
      <MenuItem onClick={() => handleOnClick("women's clothing")}>Ropa para dama</MenuItem>
      <MenuItem onClick={() => handleOnClick("men's clothing")}>Ropa para caballero</MenuItem>
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