import React from 'react'
import { Link } from 'react-router-dom'
import IProduct from '../../model/product'
import "./product.style.css"


const Product = ({ item }: { item: IProduct }) => {
    return (
        <div className="container">
            <div className="product">
                <div className="productImage">
                    <img src={item.image} alt="" />
                </div>
                <Link to={`/shop/${item.id}`} className="product-name">{item.name}</Link>
                <p className="product-price">{item.price}  VND</p>
            </div>
        </div>
    )
}

export default Product
