import React, { useEffect, useState } from 'react';
import "../../style/view/Inicio.css"
import useChange from '../../hooks/useChange';

const Inicio = () => {

    const { bgImage, indexImg } = useChange()

    const estilos = {
        backgroundImage: `url(${bgImage[indexImg]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }


    return (
        <section>
            <div style={estilos} className='PortadaInicio'>
                <div className='containerTitle-portada'>
                    <div className='title-Portada'>
                        <h1 className='display-1 fw-bold'>Indulge in the delights of authentic</h1>
                        <p className='display-1 fw-bold text-light'>street food!</p>
                        <p className='text-light'>
                            We take pride in offering a wide variety of mouthwatering dishes that are made with only the
                            freshest and highest quality ingredients.
                        </p>
                    </div>
                    <div className='containerBtn-portada'>
                        <button className='btnPortada'>Visitanos Hoy</button>
                        <button className='btnPortada'>Ver Menu</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inicio;