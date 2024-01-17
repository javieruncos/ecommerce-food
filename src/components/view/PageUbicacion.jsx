import React from 'react';
import "../../style/view/PageUbicacion.css"

const PageUbicacion = () => {
    return (
        <div>
            <div className=" container my-5">
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='pageUbicacion-title mt-5 container' data-aos="fade-up">
                            <h2 className='display-4'>Contactanos</h2>
                            <p>Ya sea que tengas una pregunta, comentarios o
                                simplemente quieras decir hola, estamos aquí para ayudarte
                            </p>
                            <div>
                                <form action="">
                                    <div className='containerInput-ubicacion'>
                                        <input type="text" placeholder='Nombre' className='form-control mb-2' />
                                        <input type="text" placeholder='Apellido' className='form-control mb-2' />
                                        <input type="text" placeholder='Telefono' className='form-control my-2' />
                                        <input type="email" placeholder='email' className='form-control my-2' />
                                        <div className='w-100 '>
                                            <textarea placeholder='Mensaje' cols="30" className='w-100 mt-2 form-control'></textarea>
                                        </div>
                                    </div>
                                    <button className='btnPageUbicacion'>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='w-100 mapa mt-4' data-aos="fade-up">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.1118933145958!2d-65.2103087!3d-26.8257132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c14497b635d%3A0x4b50795332e6a853!2sPcia%20de%20C%C3%B3rdoba%20910%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1704902756404!5m2!1ses-419!2sar"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                className='w-100'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4' data-aos="fade-up">
                        <div className='cardUbicacion my-2'>
                            <div className='container py-3'>
                                <i className="display-4 text-warning bi bi-chat-dots-fill"></i>
                            </div>
                            <div className='container pt-3'>
                                <p>Chatear para ventas</p>
                                <p className='text-muted'>Nuestro Correo</p>
                                <a href="">restaurante@mail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4' data-aos="fade-up">
                        <div className='cardUbicacion my-2'>
                            <div className='container py-3'>
                                <i className="display-4 text-warning bi bi-geo-alt"></i>
                            </div>
                            <div className='container pt-3'>
                                <p>Visitanos</p>
                                <p className='text-muted'>Nuestra Direccion</p>
                                <a href="">Pcia de Cordoba 910</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4' data-aos="fade-up">
                        <div className='cardUbicacion my-2'>
                            <div className='container py-3'>
                                <i className="display-4 text-warning bi bi-telephone-fill"></i>
                            </div>
                            <div className='container pt-3'>
                                <p>Lamanos</p>
                                <p className='text-muted'>Nuestro telefono</p>
                                <a href="">+54 3929192</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageUbicacion;