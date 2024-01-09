import React from 'react';
import "../../style/view/AddProduct.css"
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handelSubmit, formState: { errors } } = useForm()



    return (
        <div>
            <h2 className='text-center my-5'>Nuevo Producto</h2>
            <div className='container w-100 mt-5'>
                <form className='d-flex flex-column  w-75 mx-auto formAddProduct my-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 w" controlId="formBasicEmail">
                        <Form.Label>Descripcion del producto</Form.Label>
                        <textarea name="" id="" className='w-100 form-control'></textarea>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example">
                            <option>Selecciona una Categoria</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    {/* <input type="text" placeholder='nombre del producto' className='formInput form-control ' />
                    <input type="text" placeholder='url imagen' className='formInput form-control'/>
                    <input type="number" placeholder='precio' className='formInput form-control'/>
                    <textarea name="" id="" placeholder='descripcion del producto' className='formInput form-control'></textarea>
                    <select name="" id="" className='formInput form-control'>
                        <option value="hamburguesas">Hamburgesas</option>
                        <option value="pizza">Pizza</option>
                        <option value="pasta">Pastas</option>
                        <option value="pollo">pollo</option>
                    </select> */}
                    <button className='btn btn-warning'>agregar producto</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;