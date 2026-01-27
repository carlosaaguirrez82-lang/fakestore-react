import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import type { NavItem } from '../../app/config/navigation';
import { useAuthStore } from '../../app/store/useAuthStore';

interface NavBarProps {
    items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login'); // Redirige visualmente
        setTimeout(() => {
            logout(); // Borra el token
        }, 100);
    };

    return (
        <AppBar position='static'>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Box style={{ display: 'flex', height: '-webkit-fill-available' }}>
                    <Typography variant='h5' style={{ display: 'flex', alignItems:'center'}}>FakeStore</Typography>
                    <Box style={{ display: 'flex', margin: '0 1rem'}}>
                        {items.map((item) => (
                        <NavLink key={item.path} to={item.path} style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                display: 'flex',
                                alignItems: 'center', 
                                padding: '0rem 1rem ',
                                fontWeight: isActive ? "bold" : "",
                                background: isActive ? '#BFDBF8' : '#1976D2',
                                color: isPending ? "red" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}>
                            {item.label}
                        </NavLink>
                    ))}
                    </Box>
                    
                </Box>
                <Box>
                    <Button onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}