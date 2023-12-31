import React, { useContext } from 'react';
import { carritoContext } from '../context/StateCarrito';

const useCarrito = () => {
    const {carrito,setCarrito} = useContext(carritoContext)
    
    const agregarCarrito = (producto)=>{
       setCarrito([...carrito,producto])
    }
 

    return {agregarCarrito}
};

export default useCarrito;