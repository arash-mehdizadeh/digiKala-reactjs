import React from 'react'
import {ReactComponent as ShoppingCart } from './icons/shopping-cart.svg'
import {ReactComponent as DigikalaIco} from './icons/Digikala.svg'
import UserPic from './icons/user-6767.png'
import './style.css'

const UpperHeader = () => {
    return (
        <div className="upperHeader-container" > {/* style={isShow ? { display: 'none' } : {} } */}
   
                <div className="logo-container">
                    <a href="https://www.digikala.com/" className="logo" alt="دیجی کالا">
                        <DigikalaIco />
                    </a>
                </div>

                <div className="search-container">
                    {/*<span class="fa fa-search form-control-feedback"></span>*/}
                    <input type="search" className='searchBox'
                    /*  ${isActive ? 'isActiveSearch' : ""}`} onClick={() => setIsActive(!isActive) */
                    placeholder="جستجو در دیجی&zwnj;کالا …"
                    dir="rtl" align="right"  />
                </div>

                <div className="upperEmptyHeaderArea"></div>
                
                <div className="login-container">
                    <a href="/loggin" className="loginSection">
                        
                        <div className="userPic-container">
                            <img src={UserPic} className="userPic" alt=""></img>
                        </div>
                        <div className="userText-container">
                            <p className="usertext">ورود به حساب کاربری</p>
                        </div>
                    </a>
                    
                    <div className="vertical"></div>

                    <a href="/cart" className="shoppingCart" >
                        <ShoppingCart />
                    </a>
                </div>    
            </div>
    )
}

export default UpperHeader