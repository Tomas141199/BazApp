import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

//
const ImgProducto = styled.img`width: 50px;  `

export const Productos = ({ nombre, imagen }) => {
    return (
        <div className="g-col-4">
            {/*DIV DE LA FICHA*/}
            <div className="card ">
                <ImgProducto src={imagen} class="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Status de venta:</p>
                </div>
                <div className="card-body" >
                    <button class="btn btn-primary ">Detalles</button>
                    <button class="btn btn-primary ">Cancelar</button>
                </div>
            </div>
        </div>


    );
};

export default Productos;
