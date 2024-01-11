import React from 'react';
import "../style/Login.css"

const Login = () => {
    return (
        <div className='loginPage'>
            <div className='capaLogin'>
                <div className='pt-5 container'>
                    <h2 className='text-center text-light fontGlobal display-5'>Iniciar Sesion</h2>
                    <div className='containerLogin mx-auto container mt-4'>
                        <form action="" className='py-5'>
                            <input type="email" placeholder='Usuario' className='form-control mb-3' />
                            <input type="text" placeholder='contraseña' className='form-control ' />
                            <button className='btn btn-warning w-100 mt-4'>Iniciar Sesion</button>
                            <div className='d-flex justify-content-center align-items-center flex-column  mt-3'>
                                <span>¿No tienes una cuenta?</span>
                                <a href="">Registrate</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;