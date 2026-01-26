import { Menu, MenuItem, IconButton, Badge } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Notifications from './Notifications';
import { useAuthStore } from '../../../app/store/useAuthStore';
import { useNavigate } from 'react-router-dom';

interface UserMenuProps {
  anchorEl: HTMLElement | null;
  mobileMoreAnchorEl: HTMLElement | null;
  handleMenuClose: () => void;
  handleMobileMenuClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const UserMenu = ({
  anchorEl,
  mobileMoreAnchorEl,
  handleMenuClose,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}: UserMenuProps) => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout();
    handleMenuClose();
    navigate('/login');
  };

  const handleMenuProfile = () => {
    handleMenuClose();
    navigate('/users')
  };


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Menú de Escritorio
  const desktopMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuProfile}>Mi perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Ajustes</MenuItem>
      <MenuItem onClick={onLogoutClick} sx={{ color: 'error.main' }}>Cerrar sesión</MenuItem>
    </Menu>
  );

  // Menú de Móvil
  const mobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <Notifications />
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {desktopMenu}
      {mobileMenu}
    </>
  );
};