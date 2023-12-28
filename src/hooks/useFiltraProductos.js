import React from 'react';
import { useState } from 'react';

const useFiltraProductos = () => {
   const [filtro, setFiltro] = useState({
    categoria:"All",
   })
  
   const filtrarProductos = (productos) => {
          return productos.filter((item)=>{
              return (item.categoria === filtro.categoria)
          }
          )
   }

    return {filtrarProductos , filtro,setFiltro}
};

export default useFiltraProductos;