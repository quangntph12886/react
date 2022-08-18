import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getProductById } from '../../../api/product'
import IProduct from '../../../model/product'
import "./productDetail.style.css"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { addCard } from '../../../store/slice/card.slice'
import parse from 'html-react-parser';
import { getRelatedProduct } from '../../../api/product'
import { Link } from 'react-router-dom'

const productDetail = () => {
    const dispatch: AppDispatch = useDispatch()
    const [product, setProduct] = useState<IProduct>()
    const { id } = useParams()
    const [relatedProduct, setRelatedProduct] = useState<IProduct[]>([])

    useEffect(() => {
        getProductById(id).then(res => {
            const { data } = res
            setProduct(data)
            return data.categoryId
        }).then(id => {
            getRelatedProduct(id).then(res => {
                const { data } = res
                setRelatedProduct(data);
            })
        })

    }, [id])

    const handleClick = () => {
        if (product) {
            dispatch(addCard({
                product: product,
                quantity: 1
            }))
        }
    }

    return (
        <div className="product-detail">
            <div className="container detail">
                <div className="detail-image">
                    <img src={product?.image} alt="" />
                </div>
                <div className="detail-info">
                    <p className="detail-name">{product?.name}</p>
                    <p className="detail-price">{product?.price} VND</p>
                    <p className="detail-desc">{product?.desc}</p>
                    <div className="addToCart">
                        <button className="btn" onClick={handleClick}>Mua Ngay</button>
                    </div>
                </div>
            </div>

            <div className="container related-product">
                <h2>SAN PHAM CO LIEN QUAN</h2>
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

            <div className="container">
                {product && parse(product.longDesc)}
            </div>
        </div>
    )
}

export default productDetail
