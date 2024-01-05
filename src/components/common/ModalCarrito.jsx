import React, { useContext } from 'react';
import "../../style/ModalCarrito.css"
import { Modal, Button } from 'react-bootstrap';
import { carritoContext } from '../../context/StateCarrito';
import ItemModal from './ItemModal';

const ModalCarrito = ({ show, handleClose }) => {

    const { carrito, setCarrito } = useContext(carritoContext)

    const actualizarCantidad = (productId, nuevaCantidad) => {
        setCarrito((producto) =>{
            const nuevosProductos = carrito.map((producto) => {
                if (producto.id === productId) {
                  return { ...producto, cantidad: nuevaCantidad };
                } else {
                  return producto;
                }
              });
              // Actualizar el localStorage
              localStorage.setItem("carritoFood", JSON.stringify(nuevosProductos));
              return nuevosProductos;
        }
         
        );
      };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tus Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    carrito.map((item)=>(
                        <ItemModal producto={item} key={item.id} actualizarCantidad={actualizarCantidad}></ItemModal>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <div className='d-flex justify-content-center align-items-center w-100'>
                    <button className='btnCompra-carrito'>finalizar compra</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCarrito;