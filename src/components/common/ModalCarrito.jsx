import React, { useContext } from 'react';
import "../../style/ModalCarrito.css"
import { Modal, Button } from 'react-bootstrap';
import { carritoContext } from '../../context/StateCarrito';
import ItemModal from './ItemModal';
import useCarrito from '../../hooks/useCarrito';

const ModalCarrito = ({ show, handleClose }) => {

    const { carrito,totalPrecio} = useContext(carritoContext)
    const {eliminarProductoCarrito} = useCarrito()


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Tus Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    carrito.map((item)=>(
                        <ItemModal producto={item} key={item.id} eliminarProductoCarrito={eliminarProductoCarrito}></ItemModal>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <div className='d-flex justify-content-center align-items-center w-100 flex-column'>
                    <div className='d-flex justify-content-between w-100 mb-5'>
                        <span className='fw-bold'>Precio Total</span>
                        <span className='pe-5 fw-bold'>${totalPrecio}</span>
                    </div>
                    <button className='btnCompra-carrito'>finalizar compra</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCarrito;