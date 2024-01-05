import React, { useContext } from 'react';
import { carritoContext } from '../context/StateCarrito';

const useCarrito = () => {
    const {carrito,setCarrito,setCarritototalCarrito,setTotalCarrito} = useContext(carritoContext)
    
    const agregarCarrito = (producto, cantidad) => {
      const productoBuscado = carrito.find((item) => item.id === producto.id);

      if (productoBuscado) {
        const carritoActualizado = carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: cantidad } : item
        );
    
        // Guardar en localStorage después de actualizar el estado
        localStorage.setItem("carritoFood", JSON.stringify(carritoActualizado));
    
        setTotalCarrito(carritoActualizado.length);
        setCarrito(carritoActualizado);
      } else {
        // Guardar en localStorage antes de actualizar el estado
        const nuevoCarrito = [...carrito, { ...producto, cantidad: cantidad }];
        localStorage.setItem("carritoFood", JSON.stringify(nuevoCarrito));
    
        setTotalCarrito(nuevoCarrito.length);
        setCarrito(nuevoCarrito);
      }
      
    };
 

    return {agregarCarrito}
};

export default useCarrito;