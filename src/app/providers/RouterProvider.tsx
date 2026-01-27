import type { JSX } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../../ui/pages/LoginPage'
import  UsersPage  from '../../ui/pages/UsersPage'
import  ErrorPage  from '../../ui/pages/ErrorPage'
import HomePage from '../../ui/pages/HomePage'
import CategoryPage from '../../ui/pages/CategoryPage'
import { useAuthStore } from '../store/useAuthStore'
import ProductDetailsPage from '../../ui/pages/ProductDetailsPage'
import { CartPage } from '../../ui/pages/CartPage'  
import MainLayout from '../../ui/layouts/MainLayout'


function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isHydrated } = useAuthStore()

  if (!isHydrated) {
    return null // o spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />
}
export function AppRouter() {

  // Obtenemos el estado actual desde el store
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} 
        />

        <Route path="/error" element={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} />
      
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </PrivateRoute>
          } 
        />
      
      <Route 
        path="/cart" 
        element={
          <PrivateRoute>
              <CartPage />
          </PrivateRoute>
        } 
      />

      <Route
        path="/users"
        element={
          <PrivateRoute>
            <MainLayout>
              <UsersPage />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route 
        path="/category/:name" 
        element={<PrivateRoute><MainLayout><CategoryPage /></MainLayout></PrivateRoute>} 
      />

      <Route
        path="/products/:id" 
        element={
          <PrivateRoute>
            <MainLayout>
              <ProductDetailsPage/>
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
  )
}