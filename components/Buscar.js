import Router from "next/router";
import { useState } from "react";

const Buscar = () => {
  const [busqueda, guardarBusqueda] = useState("");

  const buscarProducto = async (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") return;

    //Redireccion del usuario
    Router.push({
      pathname: "/buscar",
      query: { q: busqueda },
    });
  };

  return (
    <form className="d-flex p-3" onSubmit={buscarProducto}>
      <input
        type="text"
        className="form-control"
        id="searchBar"
        aria-describedby="searchBar"
        placeholder="Buscar"
        onChange={(e) => guardarBusqueda(e.target.value)}
      ></input>

      <button type="submit" className="btn bg-bazapp text-white">
        Buscar
      </button>
    </form>
  );
};

export default Buscar;
