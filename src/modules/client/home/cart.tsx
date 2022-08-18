import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./cart.style.css"
import { RootState } from '../../../store/store'
import { increase,decrease } from '../../../store/slice/card.slice'
import { AppDispatch } from '../../../store/store'
import { ICardItem } from '../../../store/slice/card.slice'
const cart = () => {
    const dispatch: AppDispatch = useDispatch()
    const { card,total } = useSelector((state: RootState) => state.card)

    const handleIncrease = (item:ICardItem) => {
        dispatch(increase({...item,quantity:1}))
    }
    const handleDecrease = (item:ICardItem) => {
        dispatch(decrease({...item,quantity:1}))
    }

    

    return (
        <div className="container">
            {card.map((item, index) => (
                <div className="cart">
                    <img src={item.product.image} alt="" />
                    <h2>{item.product.name}</h2>
                    <div className="cart-price">
                        <span>{item.product.price} VND</span>
                        <span>{item.product.saleOffPrice}</span>
                    </div>
                    <div className="cart-quantity">
                        <i className='bx bx-minus' onClick={()=> handleDecrease(item)} ></i>
                        <input className="quantity" type="number" value={item.quantity} />
                        <i className='bx bx-plus' onClick= {()=> handleIncrease(item)}></i>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>tong tien </span>
                <span className="total-price">{total} VND</span>
            </div>
        </div>
    )
}

export default cart
