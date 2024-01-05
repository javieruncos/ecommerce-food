import React, { createContext } from 'react';
import { useState } from 'react';

export const carritoContext = createContext()



const StateCarrito = ({ children }) => {
    let carritoLocalStorage =JSON.parse(localStorage.getItem("carritoFood"))  || []
    let totalProductosLocalS = JSON.parse(localStorage.getItem("totalCarritoFood")) || 0
    const [carrito, setCarrito] = useState(carritoLocalStorage)
    const [totalPrecio, setTotalPrecio] = useState(0)
    const [totalCarrito, setTotalCarrito] = useState(totalProductosLocalS)
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
                    totalPrecio,
                    setTotalPrecio
                }
            }>
            {children}
        </carritoContext.Provider>
    );
};

export default StateCarrito;