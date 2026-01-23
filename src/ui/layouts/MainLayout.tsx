import type { PropsWithChildren } from 'react'
import { NavBar } from '../components/NavBar';
import { NavItems } from '../../app/config/navigation';
import { Typography } from '@mui/material';

const MainLayout =({ children }: PropsWithChildren) =>{
  return (
    <div>
      <header>
        <NavBar items={NavItems}/>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout;