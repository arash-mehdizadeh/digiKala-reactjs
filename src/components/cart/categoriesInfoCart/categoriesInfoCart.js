import React from 'react';
import Laptop from './icons/laptop.svg'
import './style.css'
import {EngTofaNum} from '../../../utils/numberTools';

const categoriesInfoCart = ({ data }) => {
    const e2p = (num) => num.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    return (
        <div className="category-cart-container">
            {
                data.map( e => (
                    <a href={e.link} className="single-categoryCart-wrapper">
                        <div className="asd">

                            <div className="category-space-between">
                                <div className="image-ico-container">
                                    <img src={Laptop}  alt=""  className="category-ico" />
                                </div>
                                <div className="categories-disc" style={{color:"#000"}}>{e.discription}</div>
                            </div>

                            <div>
                                <div className="categories-quantity" style={{color:"#00bfd6"}}> {`+ ${EngTofaNum(e.items)} کالا`} </div>
                            </div>
                        </div>
                    </a>
                ))
          }
        </div>
    )
}

export default categoriesInfoCart
