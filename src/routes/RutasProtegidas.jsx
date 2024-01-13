import React, { useContext } from 'react';
import { usuarioContext } from '../context/StateUsuarios';
import { Navigate } from 'react-router-dom';

const RutasProtegidas = ({children}) => {
    const {usuarioLogueado} = useContext(usuarioContext)
    if(usuarioLogueado.perfil === "Administrador"){
        return {children}
    }else if(usuarioLogueado.perfil === "Usuario"){
        return <Navigate to={"/*"}></Navigate>
    }else{
        return <Navigate to={"/registro"}></Navigate>
    }
};

export default RutasProtegidas;