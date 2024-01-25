import React, { useContext } from 'react';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../../style/NavMenu.css"
import ModalCarrito from './ModalCarrito';
import { carritoContext } from '../../context/StateCarrito';
import logoFood from "../../assets/logoFood.png"
import { usuarioContext } from '../../context/StateUsuarios';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const { usuarioLogueado, setUsuarioLogueado } = useContext(usuarioContext)
    const { totalCarrito } = useContext(carritoContext);
    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = ()=>{
        localStorage.removeItem("usuarioFood")
        setUsuarioLogueado({})
         navigate("/")
    }

    return (
        <>
            <Navbar expand="lg" className="bg-dark  navbar-dark menuNavbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex gap-3 justify-content-center align-items-center pt-1 mb-1'>
                            <img src={logoFood} alt="" className='logoFood' />
                            <span className='fontGlobal'>Street Food</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex gap-4 navMenu">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/menuProduct">Menu</Nav.Link>
                            <Nav.Link href="/ubicacion">Ubicacion</Nav.Link>
                            <NavDropdown title="Todas las secciones" id="basic-nav-dropdown" className='basic-nav-dropdown'>
                                <div className='containerLink bg-dark'>
                                    <NavDropdown.Item href="/" className='linkDrop'>
                                        Inicio
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/menuProduct" className='linkDrop'>
                                        Menu
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/ubicacion" className='linkDrop'>
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
                            {usuarioLogueado.nombre && usuarioLogueado.perfil !== "usuario" ?
                                <>
                                    <Nav.Link href="/administrark">Administrador</Nav.Link>
                                </>
                                : <></>
                            }

                            {usuarioLogueado.nombre ? <>
                                <a href='/login' className='LinkLogin' onClick={logout}>
                                    logout
                                </a>
                            </> : <>
                                <a href='/login' className='LinkLogin'>
                                    <i className="bi bi-person-circle"></i>
                                </a>
                            </>}
                            <div className='containerBtnNav'>
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