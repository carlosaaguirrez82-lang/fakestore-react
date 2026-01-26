import Box from '@mui/material/Box';
import { IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const CategoryMenu = () => {
  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
    >
        <MenuIcon />
    </IconButton>
    </Box>
    
  )
}

export default CategoryMenu