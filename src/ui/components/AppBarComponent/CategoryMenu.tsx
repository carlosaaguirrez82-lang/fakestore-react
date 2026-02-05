import Box from '@mui/material/Box';
import { IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecialCategories } from '../../../app/constants/categories';



const CategoryMenu = () => {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  
  const handleCategoryOnClick = (categoryName: string) => {
    handleMenuClose();
    //setSelectedCategory(categoryName)
    navigate(`/category/${categoryName}`);
  }

  return (
    <Box>
      <IconButton onClick={handleMenuOpen} color="inherit">
        <MenuIcon />
      </IconButton>
      
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleCategoryOnClick(SpecialCategories.BetterRatings)}>Mejor puntuados</MenuItem>
        <MenuItem onClick={() => handleCategoryOnClick(SpecialCategories.LatestPieces)}>Últimas piezas</MenuItem>
        <MenuItem onClick={() => handleCategoryOnClick(SpecialCategories.Sales)}>Precio especial</MenuItem>
        {/*<MenuItem onClick={() => handleCategoryOnClick("sales")}>Precio especial</MenuItem>*/}
        <MenuItem onClick={() => handleCategoryOnClick("electronics")}>Tecnología</MenuItem>
        <MenuItem onClick={() => handleCategoryOnClick("jewelery")}>Joyería</MenuItem>
        <MenuItem onClick={() => handleCategoryOnClick("women's clothing")}>Ropa para dama</MenuItem>
        <MenuItem onClick={() => handleCategoryOnClick("men's clothing")}>Ropa para caballero</MenuItem>
      </Menu>
    </Box>
  );
}

export default CategoryMenu