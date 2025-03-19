import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/HomePage"
import ProductsList from "../pages/ProductsList/ProductListPage"
import ProductPage from "../pages/Product/ProductPage"
import Cart from "../pages/Cart/CartPage"
import CheckoutPage from "../pages/Checkout/CheckoutPage"
import Cart2 from "../components/Carrinho/Cart2"

import LoginRegisterPage from "../pages/Auth/LoginRegisterPage/LoginRegister"
import AccountPage from "../pages/Account/AccountPage"
import { CartProvider } from "../contexts/CartContext/CartProvider"




export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/products" element={<ProductsList />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/category/:category" element={<ProductsList />} />
                    <Route path="/buscar/:query" element={<ProductsList />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* cart2 é temporario */}
                    <Route path="/cart2" element={<Cart2 />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/login" element={<LoginRegisterPage />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )

}