import React from 'react'
import { useEffect, useState } from 'react'
import { listCategory } from '../../../api/category'
import Category from '../../../model/category'
import banner from '../../../assets/anhto.png'
import './home.style.css'
import Product from '../../../component/product/product'
import IProduct from '../../../model/product'
import { getProductShop, getRelatedProduct, list } from '../../../api/product'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [category, setCategory] = useState<Category[]>([])
  const [relatedProduct, setRelatedProduct] = useState<IProduct[]>([])
  useEffect(() => {

    const getCategories = async () => {
      const { data } = await listCategory();
      console.log(data)
      setCategory(data);
    }
    const getProducts = async () => {
      const { data } = await getProductShop();
      setProducts(data)
    }
    getCategories();
    getProducts();
  }, [])


  return (
    <div>
      <div className="category">
        <div className="container category-container">
          <ul className="category-list">
            <li className="category-item">
              <Link to={`/home`} className="category-name">tat ca san pham</Link>
            </li>
            {category.map(item => (
              <li className="category-item">
                <Link to={`/fillproduct/${item.id}`} className="category-name">{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="banner">
            <img src={banner} alt="" width="100%" />
          </div>
        </div>
      </div>

      <div className="product-list container">
        {products.map((item, index) => (
          <Product key={index} item={item} />

        ))}
      </div>
    </div>
  )

}

export default Home
