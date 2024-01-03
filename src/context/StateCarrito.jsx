import React, { createContext } from 'react';
import { useState } from 'react';

export const carritoContext = createContext()



const StateCarrito = ({ children }) => {
    let carritoLocalStorage =JSON.parse(localStorage.getItem("carritoFood"))  || []
    const [carrito, setCarrito] = useState(carritoLocalStorage)
    const [productoCarrito, setProductoCarrito] = useState({})
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [cantidad, setCantidad] = useState(1)

    return (
        <carritoContext.Provider
            value={
                {
                    carrito, setCarrito,
                    totalCarrito,
                    setTotalCarrito,
                    cantidad,
                    setCantidad,
                    productoCarrito,
                    setProductoCarrito
                }
            }>
            {children}
        </carritoContext.Provider>
    );
};

export default StateCarrito;