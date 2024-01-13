import React, { useEffect, useState } from "react";
import { EliminarProductoApi, obtenerProductos } from "../helper/productos";
import Swal from "sweetalert2";


const useProducto = () => {
  const [listaProductos, setListaProductos] = useState([]);
  

  useEffect(() => {
    obtenerProductos().then((respuesta) => {

      setListaProductos(respuesta);
    });
  }, []);

  return { listaProductos };
};

export default useProducto;
