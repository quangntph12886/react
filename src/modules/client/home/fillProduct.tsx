import React from 'react'
import { useParams } from 'react-router'
import IProduct from '../../../model/product'
import { useState, useEffect } from 'react'
import Product from '../../../component/product/product'
import { getRelatedProduct, getProductShop } from '../../../api/product'
import { Link } from 'react-router-dom'
import Category from '../../../model/category'
import { listCategory } from '../../../api/category'
import banner from "../../../assets/anhto.png"
import "./home.style.css"
const fillProduct = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<Category[]>([])
    const { id } = useParams()
    const [relatedProduct, setRelatedProduct] = useState<IProduct[]>([])

    useEffect(() => {
        getRelatedProduct(id).then(res => {
            const { data } = res
            setRelatedProduct(data);
        })
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
    }, [id])

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
                {relatedProduct.map((item, index) => (
                    <div className="product">
                        <div className="productImage">
                            <img src={item.image} alt="" />
                        </div>
                        <Link to={`/shop/${item.id}`} className="product-name">{item.name}</Link>
                        <p className="product-price">{item.price}  VND</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default fillProduct
