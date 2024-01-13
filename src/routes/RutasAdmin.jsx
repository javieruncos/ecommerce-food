import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Administrador from '../components/view/Administrador';
import AddProduct from '../components/view/AddProduct';
import EditarProducto from '../components/view/EditarProducto';

const RutasAdmin = () => {
    return (
        <>
          <Routes>
             <Route exact path='/' element={<Administrador></Administrador>}></Route>
             <Route exact path='/newProduct' element={<AddProduct></AddProduct>}></Route>
             <Route exact path='/editProduct/:id' element={<EditarProducto></EditarProducto>}></Route>
          </Routes>
        
        </>
    );
};

export default RutasAdmin;