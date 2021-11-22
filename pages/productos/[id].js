import styled from "@emotion/styled";
import { left } from "@popperjs/core";
import Layout from "../../components/layouts/Layout";
import { useRouter } from "next/router";
import { FireContext } from "../../fire";
import { useState, useContext, useEffect } from "react";
import Message from "../../components/Message";
import { onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import DetalleCategorias from "../../components/DetalleCategorias";

//Declaramos una variable para la etiqueta img de la card
const ImgDetalleProducto = styled.img`
  // width: 400px;
`;

const Producto = () => {
  const [producto, guardarProducto] = useState({});
  const [consultarDB, guardarConsultarDB] = useState(true);
  const [error, guardarError] = useState(false);
  const [comentario, setComentario] = useState({});
  //Routing para obtener el id actual
  const router = useRouter();
  // context de firebase
  const { fire, usuario } = useContext(FireContext);

  const {
    query: { id },
  } = router;

  const executeScroll = () => {
    const elem = document.getElementById("data");
    elem.scrollTop = elem.scrollHeight;
  };

  useEffect(() => {
    if (id && consultarDB) {
      const obtenerProducto = async () => {
        const docRef = doc(fire.db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const unsub = onSnapshot(doc(fire.db, "productos", id), (doc) => {
            guardarProducto(doc.data());
            executeScroll();
            guardarConsultarDB(false);
          });
        } else {
          guardarError(true);
          guardarConsultarDB(false);
        }
      };
      obtenerProducto();
    }
    //eslint-disable-next-line
  }, [id]);

  if (Object.keys(producto).length === 0 && !error) return "Cargando...";
  //extraer los datos del producto
  const {
    categorias,
    creado,
    comentarios,
    descripcion,
    nombre,
    precio,
    propetario,
    talla,
    urlImagen,
  } = producto;

  const agregarComentario = async (e) => {
    e.preventDefault();
    if (!usuario) {
      return router.push("/login");
    }
    //Informacion extra al comentario
    comentario.mensaje = document.querySelector("#mensaje").value;
    comentario.nombre = usuario.displayName;
    comentario.usuarioId = usuario.uid;
    comentario.hora = Date.now();
    comentario.photo = usuario.photoURL;

    //Copia de los comentarios y carga al arreglo
    const nuevosComentarios = [...comentarios, comentario];

    //Actualizacion de la BD
    const productoRef = doc(fire.db, "productos", id);
    await updateDoc(productoRef, {
      comentarios: nuevosComentarios,
    });

    document.querySelector("#mensaje").value = "";

    guardarConsultarDB(true);
  };

  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <div className="row g-3 mt-5">
          <p className="d-block fs-4 text-muted ms-3 my-5 text-center h1">
            Detalles del producto
          </p>
          <div className="mt-3 row">
            <div className="col mb-3">
              <div className="card ml-4">
                <ImgDetalleProducto
                  src={urlImagen}
                  className="card-img-top mb-5 mx-auto"
                  alt={nombre}
                />
              </div>
            </div>

            {/*Segundo DIV principal QUE CONTIENE LOS DATOS DEL PRODUCTO   */}
            <div className="col mb-3">
              <div>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title mt-2 mb-5"> {nombre}</h2>
                    <h5 className="card-text h5">Talla: </h5>
                    <p className="card-text">{talla}</p>
                    <h5 className="card-text h5">Descripcion: </h5>
                    <p className="card-text">{descripcion}</p>
                    <h5 className="card-text h5">Precio: </h5>
                    <p className="card-text text-success">$ {precio} USD</p>
                  </div>

                  {/*Div de la ficha con las categorias  */}
                  <DetalleCategorias categorias={categorias} />

                  {/*Div de la ficha de los datos del vendedor */}
                  <div className="p-3">
                    <h5 className="card-text">Datos del vendedor</h5>
                    <div className="mt-2 card-text ">
                      Este producto es ofertado por:
                      <p className="text-bazapp">{propetario.nombre}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-12 fs-6 mb-2">
            <div className="container p-0">
              <div>
                <div className="row d-flex justify-content-center h-100">
                  <div className="h-100">
                    <div className="card shadow rounded border-0 h-100 bg-azul-claro">
                      <div className="card-header bg-light">
                        <h4 className="card-title text-bazapp fs-3 font-weight-bolder">
                          Preguntas
                        </h4>
                      </div>
                      <div
                        className="ps-container bg-grey  ps-active-y overflow-container"
                        id="data"
                      >
                        {/* Contenedor */}

                        {comentarios.length === 0 ? (
                          <div className="text-center mt-5">
                            Aun no hay nada
                          </div>
                        ) : (
                          comentarios.map((message) => (
                            <Message
                              message={message}
                              usuario={usuario}
                              vendedor={propetario.id}
                              key={Math.random()}
                            />
                          ))
                        )}

                        {/* Contenedor */}

                        <div className="ps-scrollbar-x-rail lb-1">
                          <div
                            className="ps-scrollbar-x l-0 w-0"
                            tabIndex="0"
                          ></div>
                        </div>
                        <div className="ps-scrollbar-y-rail thr-1">
                          <div
                            className="ps-scrollbar-y th-1"
                            tabIndex="0"
                          ></div>
                        </div>
                      </div>
                      <div className="publisher bt-1 bg-white">
                        <form onSubmit={agregarComentario}>
                          <input
                            className="publisher-input text-black border-1 w-75 me-1"
                            id="mensaje"
                            type="text"
                            name="mensaje"
                            //  onChange={comentarioChange}
                            placeholder="Escrible algo"
                          />
                          <input
                            type="submit"
                            className="btn btn-light"
                            value=">"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*PRIMER DIV PRINCIPAL QUE CONTIENE LA IMAGEN Y EL BOTON DE COMPRA */}
      </div>
    </Layout>
  );
};

export default Producto;
