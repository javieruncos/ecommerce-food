import React from 'react';
import "../style/Ubicacion.css"

const Ubicacion = () => {
    return (
        <div className='portadaUbicacion'>
            <img src="https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-100' />
            <div className='capaUbicacion'>
                <div className='container' >
                    <h3 className='display-2 fuenteInicio'>Prueba Nuestras comidas </h3>
                    <p >Entonces, ¿ qué estás esperando? ¡Ven y prueba la magia hoy</p>
                    <a href='/ubicacion' className='btn-Ubicacion mt-4' >Ver Ubicacion</a>
                </div>
            </div>
        </div>
    );
};

export default Ubicacion;