import type { PropsWithChildren } from 'react'
import { Container } from '@mui/material';
import  AppBarComponent from '../components/AppBarComponent';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/*
        <header>
          <h3>FakeStore</h3>
        </header>
      */}
      <AppBarComponent />
      <Container component="main" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  )
}

export default MainLayout;
