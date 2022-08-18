import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './layout/admin.layout'
import ProductCreate from './modules/admin/ProductCreate'
import ProductList from './modules/admin/ProductList'
import ProductUpdate from './modules/admin/ProductUpdate'
import ClientLayout from './layout/client.layout'
import CategoryList from './modules/admin/category/categoryList'
import CategoryCreate from './modules/admin/category/categoryCreate'
import Home from './modules/client/home/home'
import ProductDetail from './modules/client/home/productDetail'
import { Signup } from './modules/auth/signup'
import { Signin } from './modules/auth/signin'
import FillProduct from './modules/client/home/fillProduct'
import RequiredAdmin from './component/RequiredAdmin'
import Cart from './modules/client/home/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="signup" element={<Signup/>} />
      <Route path="signin" element={<Signin/>} />
      <Route path="/" element={<ClientLayout/>} >
        <Route path="home" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shop/:id" element={<ProductDetail/>} />
        <Route path="fillproduct/:id" element={<FillProduct/>} />
      </Route>

      <Route path="admin" element={<RequiredAdmin><AdminLayout /></RequiredAdmin>}>
          <Route path="product/list" element={<ProductList/>} />
          <Route path="product/create" element={<ProductCreate/>} />
          <Route path="product/update/:id"element={<ProductUpdate/>}/>
          <Route path="category/list" element={<CategoryList/>} />
          <Route path="category/create" element={<CategoryCreate/>} />
      </Route>
      
    </Routes>
  )
}

export default App
