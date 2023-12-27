import React, { useEffect, useState } from 'react';
import "../../style/view/MenuProduct.css"
import CardProducts from "../products/CardProducts"
import { obtenerProductos } from '../../helper/productos';
import Ubicacion from '../Ubicacion';

const MenuProducts = () => {

    const [productosMenu, setProductosMenu] = useState([])

    useEffect(() => {
        obtenerProductos().then((respueta) => {
            console.log(respueta)
            setProductosMenu(respueta)
            console.log(productosMenu)
        })
    }, [])



    return (
        <section>
            <div className="PortadaMenu">
                <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className=' containerTitle-Menu text-center'>
                    <h2 className='display-1'>Menu</h2>
                    <p>
                        Bienvenido a nuestro apetitoso blog, donde te
                        llevamos en un viaje a través del vibrante <br /> y
                        delicioso mundo de la comida
                    </p>
                </div>
            </div>
            <article className='mt-5'>
                <div>
                    <div className='navCategoria-Menu my-4 container'>
                        <div>
                            <button className='btn-navMenu'>
                                Todos
                            </button>
                            <button className='btn-navMenu'>
                                hambueguesas
                            </button>
                            <button className='btn-navMenu'>
                                Pastas
                            </button>
                            <button className='btn-navMenu'>
                                Pizza
                            </button>
                            <button className='btn-navMenu'>
                                Pollo
                            </button>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='container'>
                    <div className='row'>
                        {
                            productosMenu.map(item => {
                                return <>
                                    <div className='col-12 col-md-4 col-lg-4' key={item.id}>
                                        <CardProducts producto={item}></CardProducts>
                                    </div>
                                </>
                            })
                        }
                    </div>

                </div>
            </article>
            <article className='my-5'>
                <Ubicacion></Ubicacion>
            </article>
        </section>
    );
};

export default MenuProducts;