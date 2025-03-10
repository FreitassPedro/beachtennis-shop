import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProductList from "../pages/ProductList"

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={ <ProductList />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )

}