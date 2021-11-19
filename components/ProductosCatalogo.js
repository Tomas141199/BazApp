import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import getEstatus from "../utilities/obtenerEstatus";

const ImgProducto = styled.img`
  width: 220px;
`;

export const ProductosCatalogo = ({ producto }) => {
    return (
      <div className="col-md-4 mb-5">
        <div className="card">
            <div className="card-img-top text-center">
                <ImgProducto
                src={producto.urlImagen}
                className="card-img"
                alt={producto.nombre}
                />
            </div>
            <div className="card-body text-left">
                <p className="fw-bolder fs-5">{producto.nombre}</p>
                <p className="text-muted fs-6">${producto.precio}</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default ProductosCatalogo;