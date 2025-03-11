import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProductList from "../pages/ProductList"
import Product from "../pages/Product"
import Cart from "../pages/Cart"

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/" element={<Product />} />
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}