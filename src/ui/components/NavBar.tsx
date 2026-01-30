import { AppBar, Toolbar, Typography, Button, Box, List, IconButton, Drawer } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import type { NavItem } from '../../app/config/navigation';
import { useAuthStore } from '../../app/store/useAuthStore';
import styles from './NavBar.module.scss';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'

interface NavBarProps {
    items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login'); // Redirige visualmente
        setTimeout(() => {
            logout(); // Borra el token
        }, 100);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <Box className={styles.drawerContent} role="presentation">
            <Typography>
                FakeStore
            </Typography>
            <List>
                {items.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={handleDrawerToggle}
                        className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ''}`}>
                        {item.label}
                    </NavLink>
                ))}
            </List>
            <Box className={styles.moileLogout}>
                <Button
                    fullWidth
                    variant='outlined'
                    color='error'
                    onClick={handleLogout}>
                    Cerrar Sesión
                </Button>
            </Box>
        </Box>
    );

    return (
        <AppBar position='static'>
            <Toolbar className={styles.toolbar}>

                <Box className={styles.desktopSection}>
                    <Box style={{ display: 'flex', height: '-webkit-fill-available' }}>
                        <Typography variant='h5' component='div' className={styles.brand}>FakeStore</Typography>
                        <Box className={styles.navLinks}>
                            <nav className={styles.navLinks}>
                                {items.map((item) => (
                                    <NavLink key={item.path} to={item.path} className={({ isActive }) =>
                                        `${styles.link} ${isActive ? styles.activeLink : ''}`
                                    }>
                                        {item.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </Box>
                    </Box>
                    <Box>
                        <Button onClick={handleLogout} className={styles.logoutBtn}>
                            Cerrar Sesión
                        </Button>
                    </Box>
                </Box>

                
                <Box className={styles.mobileMenuButton}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
            <Drawer
                anchor='right'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted:true
                }}>
                {drawerContent}

            </Drawer>
        </AppBar>
    );
}