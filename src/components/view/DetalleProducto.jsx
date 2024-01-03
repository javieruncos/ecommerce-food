import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import "../../style/view/DetalleProducto.css"
import { obtenerProductoId } from '../../helper/productos';
import { useParams } from 'react-router-dom';
import useCarrito from '../../hooks/useCarrito';
import { carritoContext } from '../../context/StateCarrito';

const DetalleProducto = () => {

    const [productoDetalle, setProductoDetalle] = useState({})
    const { id } = useParams()
    const {cantidad,setCantidad} = useContext(carritoContext)
    const {agregarCarrito} = useCarrito()

    useEffect(() => {
        obtenerProductoId(id).then((respuesta) => {
            console.log(respuesta)
            setProductoDetalle(respuesta.response)
        })
    }, [])


    const changeCantidad = (e)=>{
       setCantidad(parseInt(e.target.value))
    }

    return (
        <section className='container'>
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
                            <span className='d-block fs-1 mb-2 fuente-detalle'>{productoDetalle.nombreProducto}</span>
                            <span className='fs-4 fuente-detalle'>Ingredientes</span>
                            <ul className='listDetalle'>
                                {
                                    productoDetalle?.ingredientes?.map((item) => (
                                        <li key={item}>{item},</li>
                                    ))
                                }

                            </ul>
                            <div>
                                <span className='fs-3 fuente-detalle'>Precio</span>
                                <p className='fs-3 fw-bold precioDetalle'>$12.00</p>
                            </div>

                            <span className='fs-3 fuente-detalle'>Cantidad</span>
                            <div className='containerAdd'>
                                <div className='cantidadProducto '>
                                   <input type="number" min={1}
                                    placeholder={cantidad}
                                     className='w-75' 
                                     onChange={changeCantidad}/>
                                </div>
                                <div>
                                    <button className='BtnCarrito' onClick={()=>{agregarCarrito(productoDetalle,cantidad)}}>Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div className='mt-5'>
                    <h3 className='fs-1 fuente-detalle'>Acerca del producto</h3>
                    <p>
                        {productoDetalle.descripcion}
                    </p>
                </div>
            </article>
        </section>
    );
};

export default DetalleProducto;