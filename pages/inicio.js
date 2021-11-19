import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { FireContext } from "../fire";
import { useContext } from "react";
import ProductosCatalogo from "../components/ProductosCatalogo";
import {TiposCategorias} from "../utilities/categorias";
import CategoriasCatalogo from "../components/CategoriasCatalogo";

import { collection, doc, getDocs, orderBy, query } from "@firebase/firestore";

const Inicio = () => {

  //State
  const [catalogo, setCatalogo] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const { fire } = useContext(FireContext);

  useEffect(() => {
    const ObtenerCatalogo = async () => {
      //Consulta Firebase
      const q = query(collection(fire.db, "productos"));

      //Snapshot
      const querySnapshot = await getDocs(q);

      //ManejarSnapShot
      ManejarSnapshot(querySnapshot);

    };
    ObtenerCatalogo();
  }, []);

  function ManejarSnapshot(querySnapshot) {
    const catalogo = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setCatalogo(catalogo);
  }

  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <div className="row g-3 mt-5">
          <div className="dropdown">
            <p className="fs-4 text-muted ms-3 my-3 d-inline">Catálogo</p>
            <button className="btn bg-bazapp text-white dropdown-toggle d-inline ms-3 my-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Categorías
            </button>
              <CategoriasCatalogo
                cat={TiposCategorias}
            />
            <button type="button" class="btn bg-bazapp text-white float-end ms-3 my-3">Buscar</button>
            <div className="col-3 float-end ms-3 my-3">
              <input type="text" className="form-control" id="searchBar" aria-describedby="searchBar" placeholder="Buscar"></input>
            </div>
          </div>
        </div>
        <div className="row hidden-md-up mt-5">
          {catalogo.map((producto) => (
            <ProductosCatalogo key={producto.id} producto={producto} />
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Inicio;
