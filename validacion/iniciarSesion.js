export default function validarIniciarSesion(values) {
  let errores = {};

  //Validacion - Email
  if (!values.email) {
    errores.email = "El Correo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errores.email = "El Correo no es valido";
  }

  //Validacion - Password
  if (!values.password) {
    errores.password = "La Contraseña es obligatoria";
  }

  return errores;
}
