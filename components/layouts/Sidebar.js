import styled from "@emotion/styled";
import Link from "next/Link";
import { useEffect } from "react";
const Logo = styled.img`
  width: 62px;
  height: 45px;
`;

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header text-center">
        <Logo src="/ganchos.png" alt="logo ganchos" />
      </div>

      <ul className="list-unstyled components">
        <p className="ms-2 fw-bold text-bazapp">Mi Cuenta</p>
        <li key={"Catalogo-baz"}>
          <Link href="/inicio">
            <a className="text-bazapp-fuerte">Catalogo</a>
          </Link>
        </li>
        <li key={"Publicar-baz"}>
          <Link href="/publicar">
            <a className="text-bazapp-fuerte">Publicar</a>
          </Link>
        </li>
        <li key={"Publicaciones-baz"}>
          <Link href="/publicaciones">
            <a className="text-bazapp-fuerte">Publicaciones</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
