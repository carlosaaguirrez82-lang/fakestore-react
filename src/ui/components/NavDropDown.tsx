import { useState, useRef } from 'react';
import { Menu, MenuItem, Fade } from '@mui/material';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from './NavBar.module.scss';
import type { NavItem } from '../../app/config/navigation';

interface Props {
    item: NavItem; // Recibimos el ítem padre completo
}

export const NavDropdown = ({ item }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);// Estados para el hover
    const open = Boolean(anchorEl);
    const timeoutRef = useRef<number | null>(null);

    const handleEnter = (event: React.MouseEvent<HTMLElement>) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setAnchorEl(event.currentTarget);
    };

    const handleLeave = () => {
        timeoutRef.current = window.setTimeout(() => setAnchorEl(null), 100);
    };

    const handleMenuEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleClickChild = (childPath: string) => {
        navigate(`${item.path}/${childPath}`);
        setAnchorEl(null);
    };

    const isActive = location.pathname.startsWith(item.path);

    return (
        <>
            <NavLink
                to={item.path}
                className={`${styles.link} ${isActive ? styles.activeLink : ''}`}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                aria-owns={open ? `menu-${item.label}` : undefined}
                aria-haspopup="true"
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {item.label}
            </NavLink>

            <Menu
                id={`menu-${item.label}`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleLeave}
                MenuListProps={{ onMouseEnter: handleMenuEnter, onMouseLeave: handleLeave }}
                sx={{ pointerEvents: 'none' }}
                disableAutoFocusItem
                disableScrollLock
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                TransitionComponent={Fade}
                PaperProps={{
                    sx: { pointerEvents: 'auto', marginTop: 0, minWidth: 150 }
                }}
            >
                {item.children?.map((child) => (
                    <MenuItem key={child.path} onClick={() => handleClickChild(child.path)}>
                        {child.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};