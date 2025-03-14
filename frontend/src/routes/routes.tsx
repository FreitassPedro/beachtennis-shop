import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/HomePage"
import ProductList from "../pages/ProductList/ProductListPage"
import Product from "../pages/Product/ProductPage"
import Cart from "../pages/Cart/CartPage"
import CheckoutPage from "../pages/Checkout/CheckoutPage"
import Cart2 from "../components/Carrinho/Cart2"

import LoginRegisterPage from "../pages/Auth/LoginRegisterPage/LoginRegister"
export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                {/* cart2 é temporario */}
                <Route path="/cart2" element={<Cart2 />} />
                <Route path="/checkout" element={<CheckoutPage />} />

                <Route path="/login" element={<LoginRegisterPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}