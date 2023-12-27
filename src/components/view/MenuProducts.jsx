import React from 'react';
import "../../style/view/MenuProduct.css"

const MenuProducts = () => {
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
        </section>
    );
};

export default MenuProducts;