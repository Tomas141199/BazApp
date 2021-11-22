import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { es } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import getEstatus from "../utilities/obtenerEstatus";
import Link from "next/link";
//
const ImgProducto = styled.img`
  width: 220px;
`;

export const Productos = ({ producto }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card text-center">
        <div className="card-header">
          <p className="fw-bolder fs-5">{producto.nombre}</p>
          <p className="text-muted fs-6">
            Estatus: {getEstatus(producto.estatus)}
          </p>
        </div>
        <div className="card-body">
          <ImgProducto
            src={producto.urlImagen}
            className="card-img"
            alt={producto.nombre}
          />
        </div>
        <div className="card-footer text-bazapp">
          <p className="d-block text-muted fs-6">
            Publicado hace:{" "}
            {formatDistanceToNow(new Date(producto.creado), { locale: es })}
          </p>
          <Link href="/productos/[id]" as={`productos/${producto.id}`}>
            <a className="card-link fw-bold">Detalles</a>
          </Link>

          <a href="#" className="btn btn-outline-danger ms-5 fw-bold">
            Eliminar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Productos;
