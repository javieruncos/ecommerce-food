import React, { useEffect, useState } from 'react';
import "../../style/view/MenuProduct.css"
import CardProducts from "../products/CardProducts"
import Ubicacion from '../Ubicacion';
import useProducto from '../../hooks/useProducto';
import useFiltraProductos from '../../hooks/useFiltraProductos';

const MenuProducts = () => {
    const { listaProductos } = useProducto()
    const { filtrarProductos, filtro, setFiltro } = useFiltraProductos()
    const productosFiltrados = filtrarProductos(listaProductos)

    const categoriaFiltrada = (text) => {
        setFiltro({ ...filtro, categoria: text })
    }

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
                            <button className='btn-navMenu' onClick={() => { categoriaFiltrada("All") }}>Todos</button>
                            <button className='btn-navMenu' onClick={() => { categoriaFiltrada("Hamburguesa") }} >hambueguesas</button>
                            <button className='btn-navMenu' onClick={() => { categoriaFiltrada("pasta") }} >Pastas</button>
                            <button className='btn-navMenu' onClick={() => { categoriaFiltrada("pizza") }}>Pizza</button>
                            <button className='btn-navMenu' onClick={() => { categoriaFiltrada("pollo") }} >Pollo</button>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='container'>
                    <div className='row'>
                        {
                            (filtro.categoria === "All" ? listaProductos : productosFiltrados).map((item) => (
                                <CardProducts producto={item} key={item.id} />
                            ))
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