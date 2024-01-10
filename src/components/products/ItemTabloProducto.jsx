import React from 'react';

const ItemTabloProducto = ({producto}) => {
    return (
        <>
            <tr>
                <td>{producto.id}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.precio}</td>
                <td className='w-25'>
                    <div className=' d-flex gap-4'>
                        <a href={`/editProduct/${producto.id}`} className='btn-rounded'>editar</a>
                        <button className='btn-rounded bg-danger text-light'>X</button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemTabloProducto;