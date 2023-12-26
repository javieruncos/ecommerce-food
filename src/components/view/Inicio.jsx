import React, { useEffect, useState } from 'react';
import "../../style/view/Inicio.css"
import useChange from '../../hooks/useChange';
import LocalOpen from '../LocalOpen';
import SliderGalery from '../SliderGalery';

const Inicio = () => {

    const { bgImage, indexImg } = useChange()

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
                        <div className='titleGaleria'>
                            <h3 className='display-3'>Galeria</h3>
                            <p>Síguenos en redes sociales para estar al día con
                                nuestra ubicación y menú, o ven a visitarnos en <br />
                                persona ¡y descubre tu nueva comida favorita!
                            </p>
                        </div>
                    </div>
                    <SliderGalery></SliderGalery>
                </article>
            </section>
        </>

    );
};

export default Inicio;