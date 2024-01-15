import React from 'react';
import { useState } from 'react';
import useProducto from './useProducto';

const usePagination = () => {
    const {listaProductos} = useProducto()
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 9;
    const first50Products = listaProductos.slice(0, 45);
    
    const indexOfLastProduct = (currentPage + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = first50Products.slice(indexOfFirstProduct, indexOfLastProduct);




    return {first50Products, currentProducts,setCurrentPage,productsPerPage}
};

export default usePagination;