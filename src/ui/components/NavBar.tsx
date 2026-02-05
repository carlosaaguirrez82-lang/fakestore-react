import { AppBar, Toolbar, Typography, Button, Box, List, IconButton, Drawer, MenuItem } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import type { NavItem } from '../../app/config/navigation'; // La interfaz actualizada
import { useAuthStore } from '../../app/store/useAuthStore';
import { NavDropdown } from './NavDropDown'; // Tu componente genérico
import styles from './NavBar.module.scss';

interface NavBarProps {
    items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
        setTimeout(() => logout(), 100);
    };

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    // --- DRAWER MÓVIL DINÁMICO ---
    const drawerContent = (
        <Box className={styles.drawerContent} role="presentation">
            <Typography sx={{ p: 2, textAlign: 'center', color: '#1976d2' }}>FakeStore</Typography>
            <List>
                {items.map((item) => {
                    if (item.children && item.children.length > 0) {
                        return (
                            <Box key={item.path}>
                                <NavLink 
                                    to={item.path} 
                                    onClick={handleDrawerToggle} 
                                    className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ''}`}
                                >
                                    {item.label}
                                </NavLink>
                                
                                {/* Renderizamos los hijos dinámicamente */}
                                {item.children.map((child) => (
                                    <MenuItem 
                                        key={child.path} 
                                        onClick={() => { 
                                            navigate(`${item.path}/${child.path}`); 
                                            handleDrawerToggle(); 
                                        }} 
                                        sx={{ pl: 4 }}
                                    >
                                        <Typography variant="body2">{child.label}</Typography>
                                    </MenuItem>
                                ))}
                                <hr style={{ margin: '10px 16px', border: '0', borderTop: '1px solid #eee' }} />
                            </Box>
                        );
                    }

                    return (
                        <NavLink 
                            key={item.path} 
                            to={item.path} 
                            onClick={handleDrawerToggle} 
                            className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.activeMobileLink : ''}`}
                        >
                            {item.label}
                        </NavLink>
                    );
                })}
            </List>
            <Box className={styles.moileLogout}>
                <Button fullWidth variant='outlined' color='error' onClick={handleLogout}>Cerrar Sesión</Button>
            </Box>
        </Box>
    );

    return (
        <AppBar position='static'>
            <Toolbar className={styles.toolbar}>
                <Box className={styles.desktopSection}>
                    <Box style={{ display: 'flex', height: '-webkit-fill-available' }}>
                        <Typography variant='h5' component='div' className={styles.brand}>FakeStore</Typography>
                        
                        <nav className={styles.navLinks}>
                            {items.map((item) => {
                                if (item.children) {
                                    return <NavDropdown key={item.path} item={item} />;
                                }
                                return (
                                    <NavLink 
                                        key={item.path} 
                                        to={item.path} 
                                        className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ''}`}
                                    >
                                        {item.label}
                                    </NavLink>
                                );
                            })}
                        </nav>
                        
                    </Box>
                    <Box>
                        <Button onClick={handleLogout} className={styles.logoutBtn}>Cerrar Sesión</Button>
                    </Box>
                </Box>

                <Box className={styles.mobileMenuButton}>
                    <IconButton color='inherit' edge='start' onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            
            <Drawer anchor='left' open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
                {drawerContent}
            </Drawer>
        </AppBar>
    );
}