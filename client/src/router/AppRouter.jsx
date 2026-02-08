import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { ProductList } from "../pages/products/ProductList"
import { Layout } from "../layout/Layout"
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout/>} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  )
}
