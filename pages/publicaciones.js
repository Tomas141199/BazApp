import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { FireContext } from "../fire";
import { useContext } from "react";
import Productos from "../components/Productos";

//Importamos una libreria que nos permite filtrar los tipos de propiedades
import { collection, doc, getDocs, orderBy, query } from "@firebase/firestore";

const Publicaciones = () => {
  //State
  const [publicaciones, setPublicaciones] = useState([]);

  //Fire es una objeto de la clase Fire independiente de Firebase, este objeto mantiene la instancia de la aplicacion de base datos
  //y algunas funciones para hacer mas limpias algunas tareas
  const { fire } = useContext(FireContext);

  useEffect(() => {
    const ObtenerPublicaciones = async () => {
      //Consulta Firebase
      const q = query(collection(fire.db, "productos"));

      //Snapshot
      const querySnapshot = await getDocs(q);

      //ManejarSnapShot
      ManejarSnapshot(querySnapshot);
    };
    ObtenerPublicaciones();
  }, []);

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
    <div className="mt-navbar">
      <Layout>
        <div className="container bg-white">
          <div className="row gap-2">
            {publicaciones.map((producto) => (
              <Productos key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Publicaciones;
