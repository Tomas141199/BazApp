import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { es } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
//
const ImgProducto = styled.img`
  width: 50px;
`;

function getEstatus(key) {
  let estatus = "";
  switch (key) {
    case 0:
      estatus = "Disponible";
      break;
    case 1:
      estatus = "En Negociacion";
      break;
    case 2:
      estatus = "Vendido";
      break;
    default:
      estatus = "Sin Estatus";
      break;
  }
  return estatus;
}

export const Productos = ({ producto }) => {
  return (
    <div className="col-lg-4 col-md-12 mx-auto">
      <div className="card text-center">
        <div className="card-header">
          <p className="fw-bolder fs-4">{producto.nombre}</p>
          <p className="text-muted fs-6">
            Estatus: {getEstatus(producto.estatus)}
          </p>
        </div>
        <div className="card-body">
          <img src={producto.urlImagen} className="card-img" alt="..." />
        </div>
        <div className="card-footer text-bazapp">
          <p className="d-block text-muted fs-6">
            Publicado hace:{" "}
            {formatDistanceToNow(new Date(producto.creado), { locale: es })}
          </p>
          <a href="#" className="card-link fw-bold">
            Detalles
          </a>
          <a href="#" className="card-link ms-5 fw-bold">
            Cancelar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Productos;
