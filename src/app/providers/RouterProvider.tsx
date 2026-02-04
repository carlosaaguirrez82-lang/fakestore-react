import type { JSX } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../../ui/pages/LoginPage/LoginPage'
import  UsersPage  from '../../ui/pages/MyProfile/UsersPage'
import  ErrorPage  from '../../ui/pages/LoginPage/ErrorPage'
import  HomePage from '../../ui/pages/HomePage'
import ProductsPage from '../../ui/pages/ProductsPage/ProductDetailsPage'
import { CartPage } from '../../ui/pages/CartPage/CartPage'
import { useAuthStore } from '../store/useAuthStore'
import ProductDetailsPage from '../../ui/pages/ProductsPage/ProductDetailsPage'
import MainLayout from '../../ui/layouts/MainLayout'
import CategoryPage from '../../ui/pages/ProductsPage/CategoryPage'


function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuthStore()


  return isAuthenticated ? children : <Navigate to="/login" />
}
export function AppRouter() {

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
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
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
              <UsersPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductDetailsPage />
            </PrivateRoute>
          }
        />  

        <Route
        path="/category/:categoryName"
        element={
          <PrivateRoute>
              <CategoryPage />
          </PrivateRoute>
        }
        />
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}