import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import icon0 from '../assets/0.png'
import icon1 from '../assets/1.png'
import icon2 from '../assets/2.png'
import icon3 from '../assets/Frame.svg'
import "./header.style.css"

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container header-container">
                    <Link to="/home"> <img src={Logo} alt="" />  </Link>    

                    <div className="header-right">
                        <div className="header-search">
                            <img src={icon1} alt="" />
                            <input type="text" />
                        </div>
                        <div className="nav">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <span className="nav-link"> goi mua hang <br /> 12321345464</span>
                                </li>
                                <li className="nav-item">
                                    <img src={icon3} alt="" />
                                    <Link className="nav-link" to='/cart'>gio hang</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/signup'>dang ky</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/signin'>dang nhap</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/product/list" className="nav-link">admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
