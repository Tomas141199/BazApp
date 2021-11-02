export default function validarCrearCuenta(values) {
  let errores = {};

  if (!values.nombre) {
    errores.nombre = "El Nombre es Obligatorio";
  }

  if (!values.apellido) {
    errores.apellido = "El Apellido es Obligatorio";
  }

  if (!values.fechaNacimiento) {
    errores.fechaNacimiento = "La Fecha de Nacimiento es Obligatoria";
  }

  if (!values.estado) {
    errores.estado = "El Estado de Origen es Obligatorio";
  }

  if (!values.email) {
    errores.email = "El Correo es Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errores.email = "Correo no valido";
  }

  if (!values.password) {
    errores.password = "La Contraseña es Obligatoria";
  } else if (values.password != values.conpassword) {
    errores.password = "Las Contraseñas deben coincidir";
  }

  return errores;
}
