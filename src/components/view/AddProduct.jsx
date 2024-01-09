import React from 'react';
import "../../style/view/AddProduct.css"

const AddProduct = () => {
    return (
        <div>
            <h2 className='text-center my-5'>Nuevo Producto</h2>
            <div className='container w-100 mt-5'>
                <form className='d-flex flex-column gap-4 w-75 mx-auto formAddProduct my-5'>
                    <input type="text" placeholder='nombre del producto' className='formInput form-control ' />
                    <input type="text" placeholder='url imagen' className='formInput form-control'/>
                    <input type="number" placeholder='precio' className='formInput form-control'/>
                    <textarea name="" id="" placeholder='descripcion del producto' className='formInput form-control'></textarea>
                    <select name="" id="" className='formInput form-control'>
                        <option value="hamburguesas">Hamburgesas</option>
                        <option value="pizza">Pizza</option>
                        <option value="pasta">Pastas</option>
                        <option value="pollo">pollo</option>
                    </select>
                    <button className='btn btn-warning'>agregar producto</button>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;