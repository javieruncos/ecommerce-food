import React, { useContext } from 'react';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../../style/NavMenu.css"
import ModalCarrito from './ModalCarrito';
import { carritoContext } from '../../context/StateCarrito';

const Menu = () => {
    const { totalCarrito } = useContext(carritoContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" className="bg-dark  navbar-dark menuNavbar">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/administrador">Administrador</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <button onClick={handleShow} className='btnCarrito'>
                                <i className="bi bi-cart"></i>
                                <span>{totalCarrito}</span>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalCarrito show={show} handleClose={handleClose}></ModalCarrito>
        </>
    );
};

export default Menu;