import React, { useEffect,useState } from "react";
import {obtenerProductos} from "../helper/productos"

const useProducto = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
     obtenerProductos().then((respuesta)=>{
        console.log(respuesta)
        setListaProductos(respuesta)
     })
  },[]);

  return {listaProductos}
};

export default useProducto;
