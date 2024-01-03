import React, { useContext } from 'react';
import { carritoContext } from '../context/StateCarrito';

const useCarrito = () => {
    const {carrito,setCarrito,productoCarrito,setProductoCarrito} = useContext(carritoContext)
    
    const agregarCarrito = (producto, cantidad) => {
      const productoBuscado = carrito.find(item => item.nombreProducto === producto.nombreProducto);
    
      if (productoBuscado) {
        const productoAgregado = carrito.map(item => {
          if (item.id === producto.id) {
            return { ...item, cantidad: cantidad };
          } else {
            return item;
          }
        });
        localStorage.setItem("carritoFood", JSON.stringify([...productoAgregado]));
        
        setCarrito([...productoAgregado]);
      } else {
        console.log("El producto no existe en el carrito");
        
        // Guardar en localStorage antes de actualizar el estado
        localStorage.setItem("carritoFood", JSON.stringify([...carrito, { ...producto, cantidad: cantidad }]));
    
        setCarrito([...carrito, { ...producto, cantidad: cantidad }]);
      }
    };
 

    return {agregarCarrito}
};

export default useCarrito;