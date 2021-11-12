import Layout from "../components/layouts/Layout";
import { useContext, useState } from "react";
// Validacion
import validarCrearCuenta from "../validacion/crearCuenta";
//Context firebase
import { FireContext } from "../fire";
//Hook de validacion
import useValidacion from "../hooks/useValidacion";
//Compononte de error
import Error from "../components/Error";
//Router para colocar la navegacion del usuario
import Router from "next/router";

const Registro = () => {
  //State inicial
  const INITIAL_STATE = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    estado: "",
    email: "",
    password: "",
    conpassword: "",
  };

  //State de la pagina
  const [error, setError] = useState(false);

  const { fire } = useContext(FireContext);

  const { valores, errores, handleChange, handleBlur, handleSubmit } =
    useValidacion(INITIAL_STATE, validarCrearCuenta, crearCuenta);

  //Datos para registrar al usuario
  const { nombre, email, password, apellido, estado, fechaNacimiento } =
    valores;

  async function crearCuenta() {
    //Informacion adicional del usuario
    const userData = {
      apellido,
      estado,
      fechaNacimiento,
    };
    try {
      //Registro de la cuenta
      await fire.registrar(nombre, email, password, userData);

      //Redirigir al usuario al inicio
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error.message);
      setError(error.message);
    }
  }

  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <form onSubmit={handleSubmit} className="row g-3 mt-5 container-form">
          <p className="text-center my-5 fs-3">
            Crea tu Cuenta y Comienza a Comprar!
          </p>

          <div className="col-6">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              name="nombre"
              type="text"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu Nombre"
            />

            {errores.nombre && <Error message={errores.nombre} />}
          </div>

          <div className="col-6">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              name="apellido"
              type="text"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu Apellido"
            />

            {errores.apellido && <Error message={errores.apellido} />}
          </div>

          <div className="col-md-6">
            <label htmlFor="fechaNacimiento" className="text-label">
              Fecha de Nacimiento
            </label>
            <input
              name="fechaNacimiento"
              type="date"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errores.fechaNacimiento && (
              <Error message={errores.fechaNacimiento} />
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="estado" className="text-label">
              Estado
            </label>
            <input
              name="estado"
              type="text"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.estado && <Error message={errores.estado} />}
          </div>

          <div className="col-md-12">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.email && <Error message={errores.email} />}
          </div>

          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Constraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.password && <Error message={errores.password} />}
          </div>

          <div className="col-md-6">
            <label htmlFor="conpassword" className="form-label">
              Confirma Constraseña
            </label>
            <input
              name="conpassword"
              type="password"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-outline-secondary mb-5">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Registro;
