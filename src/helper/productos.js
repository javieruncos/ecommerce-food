const ulrProductos = import.meta.env.VITE_APP_PRODUCTOS;

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(ulrProductos);
    const data = await respuesta.json();
    console.log(respuesta);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoId = async (id) => {
  try {
    const respuesta = await fetch(ulrProductos + "/" + id);
    const producto = {
      response: await respuesta.json(),
      status: respuesta.status,
    };
    return producto;
  } catch (error) {
    console.log(error);
  }
};


export const crearProducto =async (dato)=>{
  try {
    const respuesta = await fetch(ulrProductos,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(dato)
    })

    const producto = {
      dato:await respuesta.json(),
      status : respuesta.status
    }

    return producto
  } catch (error) {
    console.log(error)
  }
}


export const editarProductoApi = async (id,dato)=>{
    try {
      const respuesta = await fetch(ulrProductos + "/" + id,{
         method:"PUT",
         headers:{
          "Content-Type": "application/json"
         },
         body:JSON.stringify(dato)
      })

      return respuesta
    } catch (error) {
      console.log(error)
    }
}


export const buscarProductoId = async (id)=>{
   try {
      const respuesta = await fetch(ulrProductos + "/" + id)
      const producto = {
        dato:await respuesta.json(),
        status : respuesta.status
      }
      return producto
   } catch (error) {
     console.log(error)
   }
}


export const EliminarProductoApi = async(id)=>{
  try {
    const respuesta = await fetch(ulrProductos + "/" + id,{
      method:"DELETE"
    })
    return respuesta
  } catch (error) {
    console.log(error)
  }
    
}