import React from 'react';
import "../style/LocalOpen.css"

const LocalOpen = () => {
    return (
        <article>
            <div className='seccion-Open d-flex justify-content-center align-items-center flex-column'>
                <div className=' container w-75'>
                    <h2 className='display-2 fw-bold text-center pt-4'>Nuestras Sucursales</h2>
                    <p className='text-center'>
                        Disfruta de platos irresistibles llenos de sabores sabrosos. 
                        Nuestra tentadora <br />
                        variedad de comida  seguramente satisfará todos tus antojos.
                    </p>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='cardLocales container my-2'>
                                <div className='d-flex justify-content-between align-items-center pt-4 container'>
                                    <span className=' provinciaName'>Tucuman</span>
                                    <span className='fechaCard'>lunes 23 abril</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center mt-4 container'>
                                    <div className=''>
                                        <span className='fw-bold'>San miguel de Tucuman</span>
                                        <p>calle Las Piedras 100</p>
                                    </div>
                                    <div>
                                        <p className='pe-3 fs-4 fw-bold horaCards'>09hs - 22hs</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center mt-4 container'>
                                    <div className=''>
                                        <span className='fw-bold'>Concepcion</span>
                                        <p>calle Pedro Herrera 292</p>
                                    </div>
                                    <div>
                                        <p className='pe-3 fs-4 fw-bold horaCards'>08hs - 22hs</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center mt-4 container'>
                                    <div className=''>
                                        <span className='fw-bold'>Famailla</span>
                                        <p>calle San Martin 500</p>
                                    </div>
                                    <div>
                                        <p className='pe-3 fs-4 fw-bold horaCards'>12hs - 22hs</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='cardLocales my-2'>
                                <div className='d-flex justify-content-between align-items-center pt-4 container'>
                                    <span className=' provinciaName'>Santiago del Estero</span>
                                    <span className='fechaCard'>lunes 23 abril</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center mt-4 container'>
                                    <div className=''>
                                        <span className='fw-bold'>Capital</span>
                                        <p>Calle Moreno 3446</p>
                                    </div>
                                    <div>
                                        <p className='pe-3 fs-4 fw-bold horaCards'>09hs - 22hs</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center mt-4 container'>
                                    <div className=''>
                                        <span className='fw-bold'>Barrio Norte</span>
                                        <p>Calle Mitre 224</p>
                                    </div>
                                    <div>
                                        <p className='pe-3 fs-4 fw-bold horaCards'>08hs - 22hs</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between align-items-center mt-4 container'>
                                    <div className=''>
                                        <span className='fw-bold'>Lomas de San Martín</span>
                                        <p>Calle Rivadavia 1000</p>
                                    </div>
                                    <div>
                                        <p className='pe-3 fs-4 fw-bold horaCards'>12hs - 22hs</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </article>

    );
};

export default LocalOpen;