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


export const loginUsuario = async(usuario)=>{
    try {
        const respuesta  = await fetch(urlUsuario)
        const dato = await respuesta.json()
        const usuarioBuscado = dato.find((item)=> item.email === usuario.email)
        if(!usuarioBuscado){
         console.log("el usuario no existe")
         return false
        }
     
        if(usuarioBuscado.contrasenia !== usuario.contrasenia){
          console.log("contraseña incorrecta")
          return false
        }
        
        console.log("usuario logueado")
        return dato
    } catch (error) {
        console.log(error)
    }
  
}