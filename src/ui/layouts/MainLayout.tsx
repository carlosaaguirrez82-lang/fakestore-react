import type { PropsWithChildren } from 'react'
import { NavBar } from '../components/NavBar/NavBar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ padding: '1rem' }}>
       <NavBar />
       <main>{children}</main>
    </div>
  )
}

export default MainLayout;
