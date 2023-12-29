import React from 'react';
import "../../style/view/DetalleProducto.css"

const DetalleProducto = () => {
    return (
        <div className='container'>
            <div className='detalleContainer'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='containerImg-detalle'>
                            <img
                                src="https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='detalleProducto container '>
                            <span className='d-block fs-1 mb-2'>Hamburguesa</span>
                            <span className='fs-4'>Ingredientes</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                                ex et! Mollitia, dignissimos nesciunt animi aperiam quae aliquam
                                vitae consequatur exercitationem molestias saepe laudantium, alias
                                adipisci. Cupiditate esse quod eos.
                            </p>
                            <div>
                                <span className='fs-3'>Precio</span>
                                <p className='fs-3 fw-bold'>$12.00</p>
                            </div>

                            <span className='fs-3'>Cantidad</span>
                            <div className='containerAdd'>
                                <div className='cantidadProducto '>
                                    <span>1</span>
                                </div>
                                <div>
                                    <button className='BtnCarrito'>Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DetalleProducto;