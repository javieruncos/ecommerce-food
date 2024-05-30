import React, { useEffect,useState } from 'react';
import { obtenerUsuarios } from '../helper/Usuarios';

const useUsuario = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])

    useEffect(()=>{
        obtenerUsuarios().then((respuesta)=>{
            setListaUsuarios(respuesta)
        })
    },[])



    return {listaUsuarios,setListaUsuarios}
};

export default useUsuario;