const urlUsuario = import.meta.env.VITE_APP_USUARIOS;

export const crearUsuario = async (dato)=>{
    try {
        const respuesta = await fetch(urlUsuario,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(dato)
        })

        const usuario = {
            data:await respuesta.json(),
            status:respuesta.status
        }
        return usuario
    } catch (error) {
        console.log(error)
    }
}

export const obtenerUsuarios = async ()=>{
    try {
         const respuesta = await fetch(urlUsuario)
         const dato = await respuesta.json()
         return dato
    } catch (error) {
        console.log(error)
    }
}