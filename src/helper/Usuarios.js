const urlUsuario = import.meta.env.VITE_APP_USUARIOS;
const urlUsuarioLogin = import.meta.env.VITE_APP_USUARIOSLOGIN;

export const crearUsuario = async (dato) => {
  try {
    const respuesta = await fetch(urlUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dato),
    });

    const usuario = {
      data: await respuesta.json(),
      status: respuesta.status,
    };
    return usuario;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch(urlUsuario);
    const dato = await respuesta.json();
    return dato;
  } catch (error) {
    console.log(error);
  }
};

export const loginUsuario = async (dato) => {
  try {
    const respuesta = await fetch(urlUsuarioLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dato),
    });

    if (respuesta.status !== 200) {
      return false;
    }

    const usuario = {
      data: await respuesta.json(),
      status: respuesta.status,
    };

    return usuario;
  } catch (error) {
    console.log(error);
    return false;
  }
};
