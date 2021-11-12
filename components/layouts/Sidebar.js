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
        <li>
          <a className="text-bazapp-fuerte" href="#homeSubmenu">
            <Link href="/publicar">Publicar</Link>
          </a>
        </li>
        <li>
          <a className="text-bazapp-fuerte">
            <Link href="/publicaciones">Publicaciones</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
