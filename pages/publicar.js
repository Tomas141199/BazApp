import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import Categorias from "../components/Categorias";
import styled from "@emotion/styled";
import { FireContext } from "../fire";
import { useContext } from "react";
import Router from "next/router";

const AgregarProducto = () => {
  const [fileurl, setFileUrl] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
  ); //aqui pocemos poner el que está por feault

  const [categorias, setCategorias] = useState([]);

  function prevIMG(input) {
    const imagenfile = input.target.files[0];
    const imageUrl = URL.createObjectURL(imagenfile);
    console.log(imageUrl);
    setFileUrl(imageUrl);
  }

  //arreglo de categorias
  const TiposCategorias = [
    { id: 1, titulo: "Accesorios" },
    { id: 2, titulo: "Bolsas" },
    { id: 3, titulo: "Calzado" },
    { id: 4, titulo: "Chamarras" },
    { id: 5, titulo: "Pantalones" },
    { id: 6, titulo: "Sacos y buzos" },
    { id: 7, titulo: "tops" },
    { id: 8, titulo: "Vestidos" },
    { id: 9, titulo: "Caballero" },
    { id: 10, titulo: "Dama" },
    { id: 11, titulo: "Infantes" },
  ];

  return (
    <div className="mt-nvar">
      <Layout />

      <div className="container w-75 bg-white mt-5 rounded shadow">
        <div className="row align-items-stretch mb-3 abs-center">
          <div className="col p-5  rounded-end">
            <h3 className="my-3 text-center titulo_morado">
              ¿Qué quieres vender?
            </h3>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  aria-describedby="emailHelp"
                  placeholder="Producto"
                />
              </div>
              <div className="row mt-3 ">
                <div className="col-md-6">
                  <label htmlFor="precio" className="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="precio"
                    name="precio"
                    placeholder="$0.000"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="talla" className="form-label">
                    Talla
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="talla"
                    placeholder="CH"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <p>Categorias</p>

              <Categorias
                cat={TiposCategorias}
                setCategorias={setCategorias}
                categories={categorias}
              />

              <div className="text-center">
                <button type="button" className="mt-3 btn bg-bazapp text-white">
                  <span className="fs-5 font-weight-bold">&#43;</span>
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
                    name="imagen"
                    accept="image/*"
                    onChange={prevIMG}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarProducto;
