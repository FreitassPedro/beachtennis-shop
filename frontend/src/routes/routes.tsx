import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/HomePage"
import ProductList from "../pages/ProductList/ProductListPage"
import Product from "../pages/Product/ProductPage"
import Cart from "../pages/Cart/CartPage"
import PaymentProcessing from "../pages/Checkout/CheckoutPage"

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<PaymentProcessing />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}