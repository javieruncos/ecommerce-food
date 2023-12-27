const ulrProductos = import.meta.env.VITE_APP_PRODUCTOS

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(ulrProductos);
    const data = await respuesta.json();
    console.log(respuesta)
    return data;
  } catch (error) {
    console.log(error);
  }
};
