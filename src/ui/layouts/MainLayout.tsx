import type { PropsWithChildren } from 'react'
import { NavBar } from '../components/NavBar';
import { NavItems } from '../../app/config/navigation';
import styles from './MainLayout.module.scss'

const MainLayout =({ children }: PropsWithChildren) =>{
  return (
    <div className={styles.layoutContainer}>
      <header>
        <NavBar items={NavItems}/>
      </header>
      <main className={styles.mainContent}>{children}</main>
    </div>
  )
}

export default MainLayout;