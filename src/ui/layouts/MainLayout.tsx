import type { PropsWithChildren } from 'react'
import { Fab, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../app/store/useCartStore';
import { NavBar } from '../components/NavBar';
import { NavItems } from '../../app/config/navigation';
import styles from './MainLayout.module.scss'

const MainLayout =({ children }: PropsWithChildren) =>{

  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles.layoutContainer}>
      <header>
        <NavBar items={NavItems}/>
      </header>
      <main className={styles.mainContent}>
        {children}
        <Fab onClick={() => navigate('/cart')} 
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 16,
            zIndex: 1000
          }}>
          <Badge badgeContent={totalItems} color='error'>
              <ShoppingCartIcon />
          </Badge>
        </Fab>
      </main>
    </div>
  )
}

export default MainLayout;