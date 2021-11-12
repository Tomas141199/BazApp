import styled from "@emotion/styled";
import { FireContext } from "../../fire";
import { useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
const Logo = styled.img`
  width: 190px;
  height: 60px;
`;

const Header = () => {
  const { usuario, fire } = useContext(FireContext);

  useEffect(() => {
    let button = document.getElementById("sidebarCollapse");
    let content = document.getElementById("content");
    let element = document.getElementById("sidebar"); // or whatever triggers the toggle
    button.addEventListener("click", function (e) {
      e.preventDefault();
      element.classList.toggle("active"); // or whate ver your active class is
      content.classList.toggle("active"); // or whatever your active class is
    });
  }, []);

  async function cerrarSesion() {
    await fire.cerrarSesion();
    Router.push("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <button type="button" id="sidebarCollapse" className="btn btn-light">
            <span> &lang; </span>
          </button>
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span className="fw-bold text-bazapp-fuerte">Bazapp</span>
            </a>
          </li>
        </ul>

        {usuario && (
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/user.png" alt="icono usuario" />
              {usuario.displayName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" onClick={cerrarSesion} href="#">
                  Cerrar sesion
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
