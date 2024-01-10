import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarProductoId, editarProductoApi } from '../../helper/productos';
import Swal from 'sweetalert2';
const EditarProducto = () => {

    const { register, handleSubmit, control, formState: { errors } ,setValue} = useForm()
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
      buscarProductoId(id).then((respuesta)=>{
         if(respuesta.status === 200){
            setValue("nombreProducto", respuesta.dato.nombreProducto)
            setValue("imagen", respuesta.dato.imagen)
            setValue("precio", respuesta.dato.precio)
            setValue("categoria", respuesta.dato.categoria)
            setValue("ingredientes", respuesta.dato.ingredientes)
            setValue("descripcion", respuesta.dato.descripcion)
         }
      })
    },[])

    const onSubmit = (data) => {
        console.log(data)
        editarProductoApi(id,data).then((respuesta)=>{
            if(respuesta.status === 200){
                Swal.fire("producto editado", "el producto fue editado correctmente", "success")
                navigate("/administrador")
            }
        })
    }

    return (
        <div>
            <h2 className='text-center my-5'>Editar Producto</h2>
            <div>
            <form className='d-flex flex-column  mx-auto formAddProduct my-5' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control type="text"
                            placeholder={errors.nombreProducto?.message}
                            {...register("nombreProducto", {
                                required: "este campo el obligatorio",
                                minLength: {
                                    value: 10,
                                    message: "la cantidad minima de caracteres es de 10 "
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "la cantidad maxima de caracteres es de 200"
                                }

                            })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Url de la imagen</Form.Label>
                        <Form.Control type="text"
                            {...register("imagen", {
                                required: "este campo el obligatorio",
                                pattern: {
                                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                    message: "Debe ingresar una URL valida"
                                }
                            })}
                            placeholder={errors.imagen?.message}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text"
                            placeholder={errors.precio?.message}
                            {...register("precio", {
                                required: "este campo el obligatorio",
                                min: {
                                    value: 50,
                                    message: " el precio minimo es de 50 "
                                },
                                max: {
                                    value: 1000,
                                    message: " el precio maximo es de 1000"
                                }

                            })} />
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 w" controlId="formBasicEmail">
                        <Form.Label>Descripcion del producto</Form.Label>
                        <textarea name="" id="" className='w-100 form-control'
                            placeholder={errors.descripcion?.message}
                            {...register("descripcion", {
                                required: "este campo es obligatorio",
                                minLength: {
                                    value: 50,
                                    message: "la cantidad minima de caracteres es de 50"
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "la cantidad maxima de caracteres es de 1000"
                                }
                            })}

                        ></textarea>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingredientes</Form.Label>
                        <div className='mb-1'>
                            <Form.Text className="text-danger">
                                {errors.ingredientes && errors.ingredientes.message}
                            </Form.Text>
                        </div>
                        <ul>
                            <Controller
                                name="ingredientes"
                                control={control} // Asegúrate de que 'control' esté disponible aquí
                                defaultValue={[]}
                                rules={{ required: 'ingresa al menos 1 ingrediente' }} // Agrega la regla de validación
                                render={({ field }) => (
                                    <>
                                        {field.value.map((ingrediente, index) => (

                                            <li key={index}>
                                                <input
                                                    type="text"
                                                    {...field}
                                                    value={ingrediente}
                                                    className='form-control w-100 my-2'
                                                    onChange={(e) => {
                                                        const newIngredientes = [...field.value];
                                                        newIngredientes[index] = e.target.value;
                                                        field.onChange(newIngredientes);
                                                    }}
                                                />
                                            </li>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => field.onChange([...field.value, ''])}
                                            className='btn btn-warning mt-2'
                                        >
                                            Agregar Ingrediente
                                        </button>
                                    </>
                                )}
                            />
                        </ul>
                    </Form.Group>
                    <Form.Select aria-label="Default select example"
                        {...register("categoria", {
                            required: "Debe seleccionar una categoria"
                        })}
                        defaultValue={"hamburguesa"}
                    >
                        
                        <option value="Hamburguesa">Hamburguesa</option>
                        <option value="pizza">Pizza</option>
                        <option value="pasta">Pasta</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                    <button className='btn btn-warning w-25 mt-5'>Editar producto</button>
                </form>
            </div>
        </div>
    );
};

export default EditarProducto;