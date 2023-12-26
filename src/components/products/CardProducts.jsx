import React from 'react';
import "../../style/CardProduct.css"
import cubiertos from "../../assets/TablerToolsKitchen2.png"
const CardProducts = () => {
    return (
        <div className='cardProducts my-4'>
            <div className='imgCard'>
                <img src="https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='containerBtn'>
                    <div className='btnProduct'>
                        <img src={cubiertos} alt="" />
                    </div>
                </div>
            </div>
            <div className='cardBody-product container pt-4'>
                <p className='fs-5 fw-bold'>Pasta clasica</p>
                <p>Two meatballs, onion, pickles, cabbage, sauce, salad, bun, onion</p>
                <p className='fs-4 fw-bold'>$ 14.99 USD</p>
            </div>
        </div>
    );
};

export default CardProducts;