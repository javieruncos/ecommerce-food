import React from 'react';
import { useState } from 'react';
import useProducto from './useProducto';

const useFiltroTabla = () => {
    const {listaProductos} = useProducto()

   const [productoTabla, setProductoTabla] = useState("")

   const handleFiltroChange =(e)=>{
      setProductoTabla(e.target.value)
   }

   const productosFiltrados =  listaProductos.filter((producto)=>
      producto.nombreProducto.toLowerCase().includes(productoTabla.toLowerCase())
   )
   
    return {handleFiltroChange,productosFiltrados}
};

export default useFiltroTabla;