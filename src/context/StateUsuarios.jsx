import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { json } from 'react-router-dom';

export const usuarioContext = createContext()

const StateUsuarios = ({children}) => {
    const usuarioLocalStorge = JSON.parse(localStorage.getItem("usuarioFood")) || {}
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioLocalStorge)

    return (
        <usuarioContext.Provider value={{usuarioLogueado,setUsuarioLogueado}}>
             {children}
        </usuarioContext.Provider>
    )
        
};

export default StateUsuarios;