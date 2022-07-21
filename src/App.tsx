import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminLayout from './layout/admin.layout'
import ProductCreate from './modules/admin/ProductCreate'
import ProductList from './modules/admin/ProductList'
import ProductUpdate from './modules/admin/ProductUpdate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
          <Route path="product/list" element={<ProductList/>} />
          <Route path="product/create" element={<ProductCreate/>} />
          <Route path="product/update/:id"element={<ProductUpdate/>}/>
      </Route>
    </Routes>
  )
}

export default App
