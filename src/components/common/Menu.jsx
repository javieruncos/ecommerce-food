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
                        <Nav className="ms-auto d-flex gap-4 navMenu">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/menuProduct">Menu</Nav.Link>
                            <Nav.Link href="/administrador">Administrador</Nav.Link>
                            <Nav.Link href="/ubicacion">Ubicacion</Nav.Link>
                            <NavDropdown title="Todas las secciones" id="basic-nav-dropdown" className='basic-nav-dropdown'>
                                <div className='containerLink bg-dark'>
                                    <NavDropdown.Item href="#action/3.1" className='linkDrop'>
                                        Inicio
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className='linkDrop'>
                                        Menu
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className='linkDrop'>
                                        Ubicacion
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/team" className='linkDrop'>
                                        Nuestro Equipo
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/testimonios" className='linkDrop'>
                                        Testimonios
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                            <div className='containerBtnNav'>
                                <a href='/login' className='LinkLogin'>
                                    <i className="bi bi-person-circle"></i>
                                </a>
                                <button onClick={handleShow} className='btnCarrito'>
                                    <i className="bi bi-cart"></i>
                                    <span>{totalCarrito}</span>
                                </button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalCarrito show={show} handleClose={handleClose}></ModalCarrito>
        </>
    );
};

export default Menu;