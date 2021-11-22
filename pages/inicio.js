import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import ProductosCatalogo from "../components/ProductosCatalogo";
import { TiposCategorias } from "../utilities/categorias";
import CategoriasCatalogo from "../components/CategoriasCatalogo";
import Buscar from "../components/Buscar";
import useProductos from "../hooks/useProducto";

const Inicio = () => {
  //State
  const [categorias, setCategorias] = useState([]);
  const { productos } = useProductos("creado");

  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="dropdown">
            <p className="fs-4 text-muted ms-3 my-3 d-inline">Catálogo</p>
            <button
              className="btn bg-bazapp text-white dropdown-toggle d-inline ms-5 my-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </button>

            <CategoriasCatalogo cat={TiposCategorias} />
          </div>
          <Buscar />
        </div>

        <div className="row hidden-md-up mt-5">
          {productos.map((producto) => (
            <ProductosCatalogo key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Inicio;
