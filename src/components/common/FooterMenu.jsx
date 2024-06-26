import React from 'react';
import "../../style/Footer.css"
import { InputGroup, Button, Form } from 'react-bootstrap';
import logoFood from "../../assets/logoFood.png"

const FooterMenu = () => {
    return (
        <div>
            <div className='containerFooter bg-dark pt-5'>
                <div className='container pt-4'>
                    <div className='row' data-aos="zoom-in">
                        <div className='col-12 col-md-12 col-lg-3'>
                            <div className='columnFooter'>
                                <div className='container  columnMenu-footer  nameFooter'>
                                    <div>
                                        <img src={logoFood} alt=""/>
                                    </div>
                                    <span className='fs-5  fontGlobal'>Street Food</span>
                                </div>
                                <div className='container  columnMenu-footer  nameFooter'>
                                    <a href='' className='redesFooter pt-2'>
                                        <i className="bi bi-facebook  fs-5"></i>
                                    </a>
                                    <a href='' className='redesFooter pt-2'>
                                        <i className="bi bi-instagram  fs-5"></i>
                                    </a>
                                    <a href='' className='redesFooter pt-2'>
                                    <i className="bi bi-twitter-x fs-5"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-5'>
                            <div className='coluumnFooter'>
                                <div className=' container  columnMenu-footer'>
                                    <a href="/">Inicio</a>
                                    <a href="/menuProduct">Menu</a>
                                    <a href="/ubicacion">Ubicacion</a>
                                    <a href="/team">Nuesto equipo</a>
                                    <a href="/login">Login</a>
                                </div>
                                <div className=' container pt-3 columnMenu-footer'>
                                    <span>
                                    <i className="bi bi-telephone-fill fs-6 "></i>
                                    </span>
                                    <span>2342342342</span>
                                    <span>23423432</span>
                                </div>
                                <div className=' container  columnMenu-footer'>
                                    <span>
                                    <i className="bi bi-envelope-at-fill"></i>
                                    </span>
                                    <span>restaurante@mail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className='columnFooter'>
                                <div className='container  columnForm-footer'>
                                    <p>Suscríbete a boletines</p>
                                    <Form>
                                        <InputGroup className="mb-3 w-100">
                                            <Form.Control
                                                placeholder="Email"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <Button variant="btn btn-warning" id="button-addon2">
                                                <i className="bi bi-arrow-right"></i>
                                            </Button>
                                        </InputGroup>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-3'>
                       <hr />
                       <div className='py-5 d-flex justify-content-center'>
                           <p>© MealMover. All Rights Reserved 2023. Licensing</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;