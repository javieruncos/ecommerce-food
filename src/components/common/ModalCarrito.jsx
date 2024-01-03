import React, { useContext } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { carritoContext } from '../../context/StateCarrito';

const ModalCarrito = ({show,handleClose}) => {

    const {carrito,setCarrito} = useContext(carritoContext)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    carrito.map((item)=>{
                      return  <><p>{item.nombreProducto}</p></>
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCarrito;