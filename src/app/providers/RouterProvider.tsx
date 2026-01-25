import type { JSX } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../../ui/pages/LoginPage'
import  ProductsPage from '../../ui/pages/ProductsPage'
import  UsersPage  from '../../ui/pages/UsersPage'
import  ErrorPage  from '../../ui/pages/ErrorPage'

import { useAuthStore } from '../store/useAuthStore'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/error" />
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
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
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}