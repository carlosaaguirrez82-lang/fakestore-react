//---------------------------------------------ÁRBOL DE RUTAS-----------------------------------------------
import type { JSX } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../../ui/pages/LoginPage'
import  UsersPage  from '../../ui/pages/UsersPage'
import  ErrorPage  from '../../ui/pages/ErrorPage'
import { useAuthStore } from '../store/useAuthStore'
import ProductsPage from '../../ui/pages/ProductsPage'
import { CartPage } from '../../ui/pages/CartPage'

//PrivateRoute va a recibir un elemento, y ese elemento debe ser de tipo JSX.Element
function PrivateRoute({ children }: { children: JSX.Element }) {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
    //CLAVE DE AUTENTIFICACIÓN
    return isAuthenticated ? children : <Navigate to="/error" />//Si la autentificación es true, envía al cildren
}

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/error" element={<ErrorPage />} />{/*Como no estan dentro de ProvateRoute son rutas públicas */}
                <Route path="/login" element={<LoginPage />} />

                <Route path="/users" element={
                    <PrivateRoute>{/*Todo lo que esté dentro de PrivateRoute, necesita tener isAuthenticated = true*/}
                        <UsersPage />
                    </PrivateRoute>
                }
                />

                <Route path="/products/:category?" element={
                    <PrivateRoute>{/*Todo lo que esté dentro de PrivateRoute, necesita tener isAuthenticated = true*/}
                        <ProductsPage />
                    </PrivateRoute>
                }
                />

                <Route path="/cart" element={
                    <PrivateRoute>{/*Todo lo que esté dentro de PrivateRoute, necesita tener isAuthenticated = true*/}
                        <CartPage />
                    </PrivateRoute>
                }
                />

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}