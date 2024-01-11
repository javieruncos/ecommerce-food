import React from 'react';
import "../../style/view/Testimonios.css"
import { comentariosClientes } from '../../helper/userTestimonios';
import SliderGalery from '../SliderGalery';

const Testimonios = () => {
    return (
        <section>
            <article>
                <div className='portadaTestimonios'>
                    <img src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div>
                        <div>
                            <h2 className='display-2 text-center'>Reseñas de Nuestros <br /> Servicios</h2>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='container mt-5'>
                    <div className='row'>
                        {
                            comentariosClientes.map((item) => {
                                return <>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <div className='cardTestimonios container my-4'>
                                            <div className='d-flex gap-3 pt-4'>
                                                <div className='imgUser-testimonio'>
                                                    <img src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                                </div>
                                                <div className='d-flex flex-column '>
                                                    <span className='nameUser-testimonio'>{item.nombre}</span>
                                                    <span className='text-secondary'>{item.usuarioRedes}</span>
                                                </div>
                                            </div>
                                            <div className='pt-3 container'>
                                                <p>{item.comentario}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                            )
                        }
                    </div>
                </div>
            </article>
            <article>
                <div className='container mt-5'>
                    <h3 className='display-3 fontGlobal'>Galeria</h3>
                    <p>Síguenos en redes sociales para mantenerte al tanto
                        de nuestra ubicación y menú, <br /> ¡o ven a visitarnos
                        en persona y descubre tu nueva comida favorita
                    </p>
                </div>
                <div className='my-5'>
                    <SliderGalery></SliderGalery>
                </div>
            </article>
        </section>
    );
};

export default Testimonios;