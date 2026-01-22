import type { PropsWithChildren } from 'react'

const MainLayout =({ children }: PropsWithChildren) =>{
  return (
    <div style={{ padding: '1rem' }}>
      <header>
        <h3>FakeStore</h3>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout;