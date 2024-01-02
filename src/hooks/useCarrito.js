import React, { useContext } from 'react';
import { carritoContext } from '../context/StateCarrito';

const useCarrito = () => {
    const {carrito,setCarrito,productoCarrito,setProductoCarrito} = useContext(carritoContext)
    
    const agregarCarrito = (producto,cantidad)=>{
      
      const productoBuscado = carrito.find(item => item.nombreProducto === producto.nombreProducto)
      if(productoBuscado){
         const productoAgregado = carrito.map((item)=>{
            if(item.id === producto.id){
                return {...item,cantidad:item.cantidad + 1}
            }else{
                return item
            }
         })

         setCarrito([...productoAgregado])

      }else{
        console.log("el producto no existe en el carrito")
        setCarrito([...carrito,{...producto,cantidad:cantidad}])
      }

    }
 

    return {agregarCarrito}
};

export default useCarrito;