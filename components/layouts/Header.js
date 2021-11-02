import styled from "@emotion/styled";
import { FireContext } from "../../fire";
import { useContext } from "react";
import Router from "next/router";
const Logo = styled.img`
  width: 190px;
  height: 60px;
`;

const Header = () => {
  const { fire, usuario } = useContext(FireContext);

  async function cerrarSesion() {
    await fire.cerrarSesion();
    Router.push("/");
  }

  return (
    <header>
      <nav className="navbar navbar-light bg-white fixed-top shadow">
        <a className="navbar-brand ms-3" href="!#">
          <Logo src="/logo.png" alt="logo bazapp" />
        </a>
        {/* Navagacion */}
        {/* Navagacion */}

        {/* Menu de Administracion */}
        <p>{usuario && usuario.displayName}</p>
        <button onClick={cerrarSesion}>Cerrar Sesion</button>
        {/* Menu de Administracion */}
      </nav>
    </header>
  );
};

export default Header;
