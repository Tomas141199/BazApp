import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import getEstatus from "../utilities/obtenerEstatus";
import Link from "next/link"

const ImgProducto = styled.img`
  width: 220px;
`;

const ProductosCatalogo = ({ producto }) => {
  const id = producto.uid;
    return (
      <div className="col-md-4 mb-5">
        <Link href="/productos/[id]" as="/productos/1">
          <div className="card" id="cardCatalogo">
            <div className="card-img-top text-center">
                <ImgProducto
                src={producto.urlImagen}
                className="card-img my-3"
                alt={producto.nombre}
                />
            </div>
            <div className="card-body text-left">
                <p className="fs-4 mb-0 text-black">{producto.nombre}</p>
                <p className="fs-6 text-black">${producto.precio}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  export default ProductosCatalogo;