import React, { useEffect, useState } from 'react';
import "../../style/view/Inicio.css"
import useChange from '../../hooks/useChange';
import LocalOpen from '../LocalOpen';

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
        </>

    );
};

export default Inicio;