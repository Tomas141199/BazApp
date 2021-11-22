import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const ImgProducto = styled.img`
  width: 220px;
`;

const ProductosCatalogo = ({ producto }) => {
  const { id, urlImagen, nombre, precio, creado } = producto;
  return (
    <div className="col-md-4 mb-5">
      <Link href="/productos/[id]" as={`/productos/${id}`} passHref>
        <div className="card" id="cardCatalogo">
          <div className="card-img-top text-center">
            <ImgProducto
              src={urlImagen}
              className="card-img my-3"
              alt={nombre}
            />
          </div>
          <div className="card-body text-left">
            <p className="fs-4 mb-0 text-black">{nombre}</p>
            <p className="fs-6 text-success">$ {precio}</p>
            <p className="fs-6">
              Publicado hace:{" "}
              {formatDistanceToNow(new Date(creado), { locale: es })}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductosCatalogo;
