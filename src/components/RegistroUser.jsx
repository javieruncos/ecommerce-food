import React, { useContext } from 'react';
import "../style/Registro.css"
import { useForm } from 'react-hook-form';
import useUsuario from '../hooks/useUsuario';
import Swal from 'sweetalert2';
import { crearUsuario } from '../helper/Usuarios';
import { useNavigate } from 'react-router-dom';
import { usuarioContext } from '../context/StateUsuarios';

const RegistroUser = () => {
    const {usuarioLogueado,setUsuarioLogueado} = useContext(usuarioContext)
    const {listaUsuarios} = useUsuario()
    const { register, handleSubmit, formState: { errors } ,reset} = useForm()
    const navigate = useNavigate()



    const onSubmitRegister = (data) => {
        data.perfil = "usuario"
        const usuarioBuscado = listaUsuarios.find((item)=> item.email === data.email)
        if(usuarioBuscado){
            Swal.fire("Error", "el usuario ya existe","error")
            return
        }

        crearUsuario(data).then((respuesta)=>{
            if(respuesta.status === 201){
                Swal.fire("Usuario creado", "el usuario se creo correctamente", "success")
                localStorage.setItem("usuarioFood",JSON.stringify(data))
                setUsuarioLogueado({...data, perfil:"usuario"})
                reset()
                navigate("/")
            }else{
                Swal.fire("error inesperado", "intentalo nuevamente en breve", "error")
            }
        })

        console.log(data)
    }




    return (
        <div className='RegistroPage mt-5'>
            <div className='capaRegistro pt-5'>
                <div className='pt-5 container'>
                    <div className='containerRegistro mx-auto container '>
                    <h2 className='text-center fontGlobal display-6 py-3'>Registro</h2>
                        <form action="" className='py-2 d-flex gap-3 flex-column' onSubmit={handleSubmit(onSubmitRegister)}>
                            <div>
                                <input type="text" placeholder="Nombre"
                                    className="form-control"
                                    {...register("nombre", {
                                        required: "este campo es requerido",
                                        minLength: {
                                            value: 2,
                                            message: "la cantidad minima de caracteres es de 2"
                                        },
                                        maxLength: {
                                            value: 70,
                                            message: "la cantidad maxima de caracteres es de 70"
                                        }
                                    })}
                                />
                                <span className='text-danger'>{errors.nombre?.message}</span>
                            </div>
                            <div>
                                <input type="text" placeholder="Apellido"
                                    className="form-control"
                                    {...register("apellido", {
                                        required: "este campo es requerido",
                                        minLength: {
                                            value: 2,
                                            message: "la cantidad minima de caracteres es de 2"
                                        },
                                        maxLength: {
                                            value: 70,
                                            message: "la cantidad maxima de caracteres es de 70"
                                        }
                                    })}
                                />
                                <span className='text-danger'>{errors.apellido?.message}</span>
                            </div>
                            <div>
                                <input type="email" placeholder="Email"
                                    className="form-control"
                                    {...register("email", {
                                        required: "Este campo es requerido",
                                        pattern: {
                                            value: "/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/",
                                            message: "El email debe ser valido, sin caracteres especiales"
                                        }
                                    })}
                                />
                                <span className='text-danger'>{errors.email?.message}</span>
                            </div>
                            <div>

                                <input type="password" placeholder="Contraseña"
                                    className="form-control"
                                    {...register("contraseña", {
                                        required: "Este campo es requerido",
                                        minLength: {
                                            value: 8,
                                            message: "La contraseña debe tener al menos 8 caracteres"
                                        },
                                        maxLength: {
                                            value: 80,
                                            message: "la contraseña no puede tener mas de 80 caracteres"
                                        }
                                    })}
                                />
                                <span className='text-danger'>{errors.contraseña?.message}</span>
                            </div>
                            <button className='btn btn-warning w-100 mt-2'>Iniciar Sesion</button>
                            <div className='d-flex justify-content-center align-items-center flex-column  py-3'>
                                <span>¿No tienes una cuenta?</span>
                                <a href="/Login">Inicia Sesion</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroUser;