import React, { useEffect, useState } from 'react';
import "../../style/view/Inicio.css"
import useChange from '../../hooks/useChange';
import LocalOpen from '../LocalOpen';
import SliderGalery from '../SliderGalery';
import CardProducts from '../products/CardProducts';
import Ubicacion from '../Ubicacion';
import useProducto from '../../hooks/useProducto';
import ReactPaginate from 'react-paginate';
import usePagination from '../../hooks/usePagination';

const Inicio = () => {
    const { first50Products, currentProducts, setCurrentPage, productsPerPage } = usePagination()
    const { bgImage, indexImg } = useChange()

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const estilos = {
        backgroundImage: `url(${bgImage[indexImg]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <>
            <section>
                <div style={estilos} className='PortadaInicio'>
                    <div className='containerTitle-portada'>
                        <div className='title-Portada'>
                            <h1 className='display-1 fw-bold'>Disfruta de las delicias auténticas</h1>
                            <p className='display-1 fw-bold text-light'>street food!</p>
                            <p className='text-light'>
                                Nos enorgullece ofrecer una amplia variedad de platos irresistibles elaborados
                                solo con los ingredientes más frescos y de la más alta calidad.
                            </p>
                        </div>
                        <div className='containerBtn-portada'>
                            <button className='btnPortada'>Visitanos Hoy</button>
                            <button className='btnPortada2'>Ver Menu</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <LocalOpen></LocalOpen>
            </section>
            <section className='seccionGalery'>
                <article className=' pt-5'>
                    <div className='container my-4'>
                        <div className='titleGaleria container '>
                            <h3 className='display-3 fuenteInicio'>Galeria</h3>
                            <div className='galeryText'>
                                <p>Síguenos en redes sociales para estar al día con
                                    nuestra ubicación y menú, o ven a visitarnos en
                                    persona ¡y descubre tu nueva comida favorita!
                                </p>
                            </div>
                        </div>
                    </div>
                    <SliderGalery></SliderGalery>
                    <SliderGalery></SliderGalery>
                </article>
                <article>
                    <div className='my-5 container'>
                        <h3 className='text-center display-4 fuenteInicio'>Nuestro Menu</h3>
                        <div className='row mt-5'>
                            {
                                currentProducts.map(producto =>
                                    <CardProducts producto={producto} key={producto.id}></CardProducts>
                                )
                            }
                        </div>
                        <div className='my-5 '>
                            <ReactPaginate
                                pageCount={Math.ceil(first50Products.length / productsPerPage)}
                                pageRangeDisplayed={5}
                                marginPagesDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                                previousLabel="<"
                                nextLabel=">"
                                pageLinkClassName='page-num'
                                previousLinkClassName='page-num'
                                nextLinkClassName='page-num'
                                activeLinkClassName='active'
                            />
                        </div>
                    </div>
                </article>
                <article>
                    <Ubicacion></Ubicacion>
                </article>
            </section>

        </>

    );
};

export default Inicio;