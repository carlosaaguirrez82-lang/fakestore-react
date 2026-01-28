import type { PropsWithChildren } from 'react'
//import { NavBar } from '../components/NavBar/NavBar';
import AppBar from '../components/AppBarComponent/AppBarComponent';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ padding: '1rem' }}>
       {/* <NavBar /> */}
       <AppBar />
       <main>{children}</main>
    </div>
  )
}

export default MainLayout;
