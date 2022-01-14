import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { FireContext } from "../fire";
import { useContext } from "react";
import Productos from "../components/Productos";

//Importamos una libreria que nos permite filtrar los tipos de propiedades
import { collection, getDocs, query, where } from "@firebase/firestore";

const Publicaciones = () => {
  //State
  const [publicaciones, setPublicaciones] = useState([]);

  //Fire es una objeto de la clase Fire independiente de Firebase, este objeto mantiene la instancia de la aplicacion de base datos
  //y algunas funciones para hacer mas limpias algunas tareas
  const { fire, usuario } = useContext(FireContext);

  useEffect(() => {
    const ObtenerPublicaciones = async () => {
      //Consulta Firebase
      const q = query(
        collection(fire.db, "productos"),
        where("propetario.id", "==", usuario.uid)
      );

      //Snapshot
      const querySnapshot = await getDocs(q);

      //ManejarSnapShot
      ManejarSnapshot(querySnapshot);
    };
    usuario && ObtenerPublicaciones();
  }, [usuario]);

  function ManejarSnapshot(querySnapshot) {
    const publicacion = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setPublicaciones(publicacion);
  }

  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <div className="row g-3 mt-5">
          <p className="d-block fs-4 text-muted ms-3 my-3">
            {publicaciones.length === 0
              ? "Aun no tienes publicaciones :( , comienza a publicar!!!"
              : "Productos en venta"}
          </p>
        </div>
        <div className="row hidden-md-up mt-5">
          {publicaciones.map((producto) => (
            <Productos key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Publicaciones;
