import React, { useContext } from "react";
import { carritoContext } from "../context/StateCarrito";

const useCarrito = () => {
  const { carrito, setCarrito, setTotalCarrito, totalPrecio, setTotalPrecio } =
    useContext(carritoContext);

  const agregarCarrito = (producto, cantidad) => {
    const productoBuscado = carrito.find((item) => item.id === producto.id);

    if (productoBuscado) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: cantidad } : item
      );

      // Guardar en localStorage después de actualizar el estado
      localStorage.setItem("carritoFood", JSON.stringify(carritoActualizado));
      const totalCarritoProductos = carritoActualizado.reduce(
        (total, item) => total + item.cantidad,
        0
      );
      localStorage.setItem(
        "totalCarritoFood",
        JSON.stringify(totalCarritoProductos)
      );

      const totalPrecioCarrito = carritoActualizado.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );

      localStorage.setItem("totalPrecioCarrito",JSON.stringify(totalPrecioCarrito));

      setTotalPrecio(totalPrecioCarrito);
      setTotalCarrito(totalCarritoProductos);
      setCarrito(carritoActualizado);
    } else {
      // Guardar en localStorage antes de actualizar el estado
      const nuevoCarrito = [...carrito, { ...producto, cantidad: cantidad }];
      localStorage.setItem("carritoFood", JSON.stringify(nuevoCarrito));

      const totalCarrito = nuevoCarrito.reduce(
        (total, item) => total + item.cantidad,
        0
      );
      localStorage.setItem("totalCarritoFood", JSON.stringify(totalCarrito));

      const totalPrecioCarrito = nuevoCarrito.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );

      localStorage.setItem(
        "totalPrecioCarrito",
        JSON.stringify(totalPrecioCarrito)
      );

      setTotalPrecio(totalPrecioCarrito);
      setTotalCarrito(totalCarrito);
      setCarrito(nuevoCarrito);
    }
  };

  // actualizar la cantidad de  productos total dentro del carrito

  const actualizarCantidad = (productId, nuevaCantidad) => {
    setCarrito((carritoActual) => {
      const nuevosProductos = carritoActual.map((producto) => {
        if (producto.id === productId) {
          return { ...producto, cantidad: nuevaCantidad };
        } else {
          return producto;
        }
      });
      // Actualizar el localStorage
      localStorage.setItem("carritoFood", JSON.stringify(nuevosProductos));
      const totalCarritoProductos = nuevosProductos.reduce(
        (total, item) => total + item.cantidad,
        0
      );

      localStorage.setItem("totalCarritoFood", totalCarritoProductos);
      
      const totalPrecio = nuevosProductos.reduce(
        (total,item)=> total + item.cantidad * item.precio ,0
      )

      localStorage.setItem("totalPrecioCarrito", totalPrecio);
      
      setTotalPrecio(totalPrecio)
      setTotalCarrito(totalCarritoProductos);
      return nuevosProductos;
    });
  };
  
  const eliminarProductoCarrito = (producto)=>{
    const carritoFiltrado = carrito.filter(item => item.id !== producto.id)
    if(carritoFiltrado){

      const nuevaCantidad = carritoFiltrado.reduce(
       (total,item)=> total + item.cantidad,0
      )

      const nuevoPrecio = carritoFiltrado.reduce(
        (total,item)=> total + item.cantidad * item.precio,0
      )

      localStorage.setItem("carritoFood",JSON.stringify(carritoFiltrado))
      localStorage.setItem("totalCarritoFood",JSON.stringify(nuevaCantidad))
      localStorage.setItem("totalPrecioCarrito",JSON.stringify(nuevoPrecio))
      setTotalCarrito(nuevaCantidad)
      setTotalPrecio(nuevoPrecio)
      setCarrito(carritoFiltrado)
    }

  }
  return { agregarCarrito, actualizarCantidad ,eliminarProductoCarrito};
};

export default useCarrito;
