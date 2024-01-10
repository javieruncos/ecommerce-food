import React from 'react';
import Swal from 'sweetalert2';
import { EliminarProductoApi, obtenerProductos } from '../../helper/productos';

const ItemTablaProducto = ({producto,setProductosApi}) => {

    const borrarProducto = (producto) => {
        Swal.fire({
          title: "Estas seguro que quieres eliminar el producto?",
          text: "No podras revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#191919",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar!",
        }).then((result) => {
          if (result.isConfirmed) {
            EliminarProductoApi(producto).then((respuesta) => {
              if (respuesta.status === 200) {
                obtenerProductos().then((respuesta) => {
                 setProductosApi(respuesta);
                });
              } else {
                console.log("error al eliminar el producto");
              }
            });
            Swal.fire("Eliminado!", "El producto se elimino correctamente.", "success");
          }
        });
      };

    return (
        <>
            <tr>
                <td>{producto.id}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.precio}</td>
                <td className='w-25'>
                    <div className=' d-flex gap-4'>
                        <a href={`/editProduct/${producto.id}`} className='btn-rounded'>editar</a>
                        <button className='btn-rounded bg-danger text-light' onClick={()=>{borrarProducto(producto.id)}}>X</button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemTablaProducto;