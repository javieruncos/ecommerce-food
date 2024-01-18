import React from 'react';
import "../../style/CardProduct.css"
import cubiertos from "../../assets/TablerToolsKitchen2.png"


const CardProducts = ({ producto }) => {
    return (
        <>
            <div className='col-12 col-md-6 col-lg-4'>
                <a href={`/detalleProducto/${producto._id}`} className='linkCard'>
                    <div className='cardProducts my-4'>
                        <div className='imgCard'>
                            <img src="https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className='containerBtn'>
                                <div className='btnProduct'>
                                    <img src={cubiertos} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='cardBody-product container pt-2'>
                            <p className='fs-5 fw-bold'>{producto.nombreProducto}</p>
                            <div className='ingrediente'>
                             {producto.ingredientes}
                            </div>
                            <p className='fs-4 fw-bold mt-2'>$ {producto.precio}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
};

export default CardProducts;