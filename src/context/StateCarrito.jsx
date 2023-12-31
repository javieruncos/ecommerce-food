import React, { createContext } from 'react';
import { useState } from 'react';

export const carritoContext = createContext()



const StateCarrito = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [cantidad, seTCantidad] = useState(0)

    return (
       <carritoContext.Provider value={{carrito,setCarrito,totalCarrito,setTotalCarrito,cantidad,seTCantidad}}>
           {children}
       </carritoContext.Provider>
    );
};

export default StateCarrito;