import React, { useContext } from 'react';
import { usuarioContext } from '../context/StateUsuarios';
import { Navigate } from 'react-router-dom';

const RutasProtegidas = ({children}) => {
      const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioFood")) || null
    if(!usuarioLogueado){
        return <Navigate to={"/login"}></Navigate>
    }
    
    if(usuarioLogueado.perfil === "Administrador"){
        return children
    }else{
        return <Navigate to={"/login"}></Navigate>
    }
};

export default RutasProtegidas;