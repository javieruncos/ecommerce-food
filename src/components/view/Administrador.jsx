import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "../../style/view/Admin.css"
import ItemTablaProducto from '../products/ItemTablaProducto';
import { obtenerProductos } from '../../helper/productos';


const Administrador = () => {
     const [productosApi, setProductosApi] = useState([])
     const [productoTabla, setProductoTabla] = useState("")

    useEffect(()=>{
      obtenerProductos().then((respuesta)=>{
        setProductosApi(respuesta)
      })
    },[])

    const handleFiltroChange =(e)=>{
        setProductoTabla(e.target.value)
     }
  
     const productosFiltrados =  productosApi.filter((producto)=>
        producto.nombreProducto.toLowerCase().includes(productoTabla.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(productoTabla.toLowerCase())
     )

    return (
        <>
        <div className='container mt-5 containerAdmin'>
            <div className='pt-5 d-flex justify-content-between align-items-center'>
                <h1>Administrador</h1>
                <a href='/administrar/newProduct' className='btn-rounded text-dark'>agregar producto</a>
            </div>
            <div className='mt-5 searchDiv'>
                <input type="text" onChange={handleFiltroChange} className='w-50 inputFiltro form-control' />
                <select className="form-select w-25" aria-label="Default select example"
                    onChange={handleFiltroChange}
                >
                    <option >Selecciona una categoria</option>
                    <option value="hamburguesa">Hamburguesa</option>
                    <option value="pizza">Pizza</option>
                    <option value="tacos">Tacos</option>
                </select>
            </div>
            <div className='mt-5'>
                <div className='table-responsive'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>editar/borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productosFiltrados.map((item) =>
                                    <ItemTablaProducto producto={item} key={item.id} setProductosApi={setProductosApi}></ItemTablaProducto>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </>
    );
};

export default Administrador;