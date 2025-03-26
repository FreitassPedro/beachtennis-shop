import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/HomePage"
import ProductsList from "../pages/ProductsList/ProductListPage"
import ProductPage from "../pages/Product/ProductPage"
import Cart from "../pages/Cart/CartPage"
import CheckoutPage from "../pages/Checkout/CheckoutPage"


import LoginRegisterPage from "../pages/Auth/LoginRegisterPage/LoginRegister"
import AccountPage from "../pages/Account/AccountPage"
import { CartProvider } from "../contexts/CartContext/CartProvider"
import { CheckoutProvider } from "../contexts/CheckoutContext/CheckoutProvider"
import HelpPage from "../pages/Help/HelpPage"
import CheckoutProcessing from "../pages/Checkout/CheckoutProcessing"
import {ToastContainer } from "react-toastify"




export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <CartProvider>
                <CheckoutProvider>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/products" element={<ProductsList />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/category/:category" element={<ProductsList />} />
                        <Route path="/buscar/:query" element={<ProductsList />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/checkout/process" element={<CheckoutProcessing />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/login" element={<LoginRegisterPage />} />
                        <Route path="/help" element={<HelpPage />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </CheckoutProvider>
            </CartProvider>
            <ToastContainer />
        </BrowserRouter >
    )

}