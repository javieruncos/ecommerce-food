import React from 'react';
import { Table } from 'react-bootstrap';
import "../../style/view/Admin.css"
import useProducto from '../../hooks/useProducto';
import ItemTabloProducto from '../products/itemTabloProducto';
import useFiltroTabla from '../../hooks/useFiltroTabla';

const Administrador = () => {

    const {handleFiltroChange,productosFiltrados} = useFiltroTabla()

    return (
        <div className='container'>
            <div className='mt-5 d-flex justify-content-between align-items-center'>
                <h1>Administrador</h1>
                <a href='' className='btn-rounded text-dark'>agregar producto</a>
            </div>
            <div className='mt-5 '>
                <input type="text" onChange={handleFiltroChange} className='w-50 inputFiltro' />
            </div>
            <div className='mt-5'>
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
                                <ItemTabloProducto producto={item} key={item.id}></ItemTabloProducto>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Administrador;