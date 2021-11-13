import styled from "@emotion/styled";
import Link from "next/link";
import LayoutHead from "../components/layouts/LayoutHead";
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/iniciarSesion";
import React, { useState } from "react";
import Error from "../components/Error";
import fire from "../fire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Router from "next/router";
import TextBazapp from "../components/layouts/TextBazapp";

const BgImagen = styled.div`
  background-image: url("/inicio.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 768px) {
    background-image: url("/logo.png");
  }
`;

export default function Home() {
  //State de la pagina
  const [load, setLoad] = useState(false);
  //Error al iniciar sesion
  const [error, setError] = useState(false);

  const STATE_INICIAL = {
    email: "",
    password: "",
  };

  //Uso del hook de validacion
  const { valores, errores, handleChange, handleBlur, handleSubmit } =
    useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  //Funcion para que el usuario inicie sesion con su correo y contrasena previamente registrados
  async function iniciarSesion() {
    try {
      await fire.autenticar(email, password);
      setLoad(true);
      //Ocultar la pantalla de carga
      setTimeout(() => {
        //Cambio del estado
        Router.push("/inicio");
      }, 8000);
    } catch (error) {
      console.log(error.message);
      setError(error.message.replace("Firebase: Error", ""));
    }
  }

  //Funcion para que usuario inicie sesion con su cuenta de google
  async function iniciarSesionConGoogle() {
    signInWithPopup(fire.auth, fire.provider)
      .then((result) => {
        //Arroja el token de acceso a la cuenta, esto es para acceder a la API de google
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // La informacion del usuario logueado
        const user = result.user;
        //Redireccion a la pagina de inicio
        setLoad(true);
        //Ocultar la pantalla de carga
        setTimeout(() => {
          //Cambio del estado
          Router.push("/inicio");
        }, 8000);
      })
      .catch((error) => {
        // Manejo de errores
        setError(error.message.replace("Firebase: Error", ""));
      });
  }

  return !load ? (
    <>
      <LayoutHead />

      <div className="container-fluid">
        {/* Grid */}
        <div className="row vw-100 vh-100">
          {/* Col-1 */}
          <BgImagen className="col-md-8 bg-white"></BgImagen>
          {/* Col-1 */}

          {/* Col-2 */}
          <div className="col-md-4 bg-bazapp-pattern d-flex flex-column justify-content-between">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
              <span className="btn btn-outline-light me-md-2 mt-2">
                <Link href="crear-cuenta">Registrarse</Link>
              </span>
            </div>
            <div className="container">
              <h2 className="h2 text-white mb-5">Iniciar Sesion</h2>

              <button
                className="mx-auto badge rounded-pill bg-light text-dark d-flex justify-content-center gap-2 p-2 mb-2"
                onClick={iniciarSesionConGoogle}
              >
                <span>Continuar con</span>
                <img src="/buscar.png" alt="icono-google" />
              </button>

              {/* Formulario */}
              <form
                className="mb-5"
                method="post"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-group mb-2">
                  <label htmlFor="email" className="form-label text-white">
                    Correo
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={email}
                  />
                </div>

                {errores.email && <Error message={errores.email} />}

                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label text-white">
                    Contraseña
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={password}
                  />
                </div>

                {errores.password && <Error message={errores.password} />}

                {error && <Error message={error} />}

                <input
                  className="btn btn-light d-block mb-2"
                  type="submit"
                  value="Entrar"
                />

                {/* Registro */}
                <span className="form-text text-white mb-5">
                  ¿Aun no tines una cuenta? Registrate{" "}
                  <Link href="/crear-cuenta">
                    <a className="text-decoration-underline text-white">Aqui</a>
                  </Link>
                </span>

                {/* Registro */}
              </form>
              {/* Formulario */}
            </div>
            {/* Col-2 */}
          </div>
          {/* Grid */}
        </div>
      </div>
    </>
  ) : (
    <TextBazapp />
  );
}
