import React, { useContext } from 'react';
import { carritoContext } from '../context/StateCarrito';

const useCarrito = () => {
    const {carrito,setCarrito,productoCarrito,setProductoCarrito,cantidad} = useContext(carritoContext)
    
    const agregarCarrito = (producto)=>{
      const productClone = {...producto,cantidad:1}
      const productoBuscado = carrito.find(item => item.nombreProducto === productClone.nombreProducto)
      if(productoBuscado){
         const productoAgregado = carrito.map((item)=>{
            if(item.id === productClone.id){
                return {...item,cantidad: +1}
            }else{
                return item
            }
         })

         setCarrito([...productoAgregado])

      }else{
        console.log("el producto no existe en el carrito")
        setCarrito([...carrito,producto])
      }
    // setCarrito([...carrito,producto])

    }
 

    return {agregarCarrito}
};

export default useCarrito;