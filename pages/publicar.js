import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import Categorias from "../components/Categorias";
import useValidacion from "../hooks/useValidacion";
import validarPublicacion from "../validacion/crearPublicacion";
import { FireContext } from "../fire";
import { useContext } from "react";
import Error from "../components/Error";
import { TiposCategorias } from "../utilities/categorias";
//Firebase storage
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import Router from "next/router";

const AgregarProducto = () => {
  //state incial
  const INITIAL_STATE = {
    nombre: "",
    precio: "",
    talla: "",
    descripcion: "",
    foto: "",
  };

  //State de la pagina
  const [error, setError] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [fileurl, setFileUrl] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
  ); //aqui pocemos poner el que está por default

  //Fire es una objeto de la clase Fire independiente de Firebase, este objeto mantiene la instancia de la aplicacion de base datos
  //y algunas funciones para hacer mas limpias algunas tareas
  const { fire, usuario } = useContext(FireContext);

  const { valores, errores, handleChange, handleBlur, handleSubmit } =
    useValidacion(INITIAL_STATE, validarPublicacion, crearPublicacion);

  //datos para crear publicación
  const { nombre, precio, talla, descripcion } = valores;
  console;

  function crearPublicacion() {
    //Si el usuario no esta autenticado lo manda a jalar un rato
    if (!usuario) {
      return Router.push("/");
    }
    try {
      //Objeto que contiene los parametros que son necesarios para crear una publicacion
      //Cuando el nombre y el valor tienen el mismo nombre basta con ponerlo sin especificar el valor con : y el valor
      const publicacion = {
        nombre,
        precio,
        talla,
        descripcion,
        categorias,
        comentarios: [],
        urlImagen: fileurl,
        creado: Date.now(),
        propetario: {
          id: usuario.uid,
          nombre: usuario.displayName,
        },
      };
      //Funcion que crear un documento de tipo publicacion
      fire.publicar(publicacion);
      //Redirigir al usuario al inicio
      return Router.push("/inicio");
    } catch (error) {
      console.error("Hubo un error al crear la punlicacion", error.message);
      setError(error.message);
    }
  }

  async function prevIMG(event) {
    //Archivo a subir
    const imagenfile = event.target.files[0];
    // Servicio de almacenamiento de archivos de firebase Storage
    const storage = getStorage();
    //Creacion del archivo de metadata, configura el tipo de archivos que se van a subir
    /** @type {any} */
    const metadata = {
      contentType: "image/*",
    };

    //Se sube el archivo y el metadata con el nombre de imagen file junto con el nombre de la caperta donde se van almacenar(articulos)
    //Esta carpeta si es que no existe storage la crea y almacena el archivo ahi, no es necesario crearla previamente
    //Ref almacena la referencia (direccion) donde se encuntra la imagen
    try {
      const storageRef = ref(storage, "publicaciones/" + imagenfile.name);
      //uploadTask permite dar seguimiento a la subida de la imagen
      const uploadTask = uploadBytesResumable(storageRef, imagenfile, metadata);

      //Seguimiento de los estados de cambio , errores y exito de la subida de la imagen
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //Obtiene el progreso de la tarea incluido el numero de bytes subidos y el total de byte que van a ser almacenados
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          //Si es que hay un error lo muestra por consola, lo ideal seria obtener el set de error para mostrarselo al usuario
          console.log(error);
        },
        () => {
          // Si es que se subio correctamente la imagen este metodo obtiene la URL de donde se encuentra almcenada la imagen en Storage
          //Igual checar en firebase
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            //Se guarda la url en el state, solo funcionaria aqui ya que es un metodo asyncrono y funciones fuera de esta cadena de promesas
            //no obtendria el valor
            setFileUrl(downloadURL);
          });
        }
      );
    } catch (error) {
      setError("Error al cargar la imagen intente de nuevo");
    }
  }

  return (
    <Layout>
      <div className="container bg-white mt-5 rounded shadow">
        <div className="row align-items-stretch mb-3 abs-center">
          <div className="col p-5  rounded-end">
            <h3 className="my-3 text-center titulo_morado">
              ¿Qué quieres vender?
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Producto"
                  value={nombre}
                />
                {errores.nombre && <Error message={errores.nombre} />}
              </div>
              <div className="row mt-3 ">
                <div className="col-md-6">
                  <label htmlFor="precio" className="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="precio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="$0.000"
                    value={precio}
                  />
                  {errores.precio && <Error message={errores.precio} />}
                </div>
                <div className="col-md-6">
                  <label htmlFor="talla" className="form-label">
                    Talla
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="talla"
                    name="talla"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="CH, M, G, XXL, 24, 27"
                    value={talla}
                  />
                  {errores.talla && <Error message={errores.talla} />}
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    name="descripcion"
                    rows="3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={descripcion}
                  ></textarea>
                  {errores.descripcion && (
                    <Error message={errores.descripcion} />
                  )}
                </div>
              </div>
              <p>Categorias</p>

              <Categorias
                cat={TiposCategorias}
                setCategorias={setCategorias}
                categories={categorias}
              />
              {categorias == "" ? (
                <p className="alert alert-warning text-center p-1">
                  Selecciona almenos una categoria
                </p>
              ) : null}

              <input type="hidden" />
              <div className="text-center">
                <button type="submit" className="mt-3 btn bg-bazapp text-white">
                  <span className="fs-5 font-weight-bold">&#43; </span>
                  Guardar
                </button>
              </div>
            </form>
          </div>
          <div className="col align-items-stretch  abs-center">
            <div className="file-field">
              <div className="z-depth-1-half mb-4">
                <img
                  src={fileurl}
                  id="previsualizar"
                  className="img-fluid"
                  alt="example placeholder"
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="btn btn-mdb-color btn-rounded float-left">
                  <p>Eligen una foto del producto</p>
                  <input
                    type="file"
                    className="form-control"
                    name="foto"
                    accept="image/*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onInput={prevIMG}
                  />
                  {errores.foto && <Error message={errores.foto} />}
                  {error && <Error message={error} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgregarProducto;
