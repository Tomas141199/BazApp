import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductosCatalogo from "../components/ProductosCatalogo";
import useProductos from "../hooks/useProducto";
import styled from "@emotion/styled";

const ImagenError = styled.img`
  width: 500px;
  border-radius: 50%;
`;

const Buscar = () => {
  const router = useRouter();

  const {
    query: { q },
  } = router;

  const { productos } = useProductos("creado");
  const [resultado, guardarResultado] = useState([]);
  const [error, guardarError] = useState(false);

  useEffect(() => {
    if (q) {
      const busqueda = q.toLowerCase();
      const filtro = productos.filter((producto) => {
        return (
          producto.nombre.toLowerCase().includes(busqueda) ||
          producto.descripcion.toLowerCase().includes(busqueda)
        );
      });
      guardarResultado(filtro);
    }
  }, [q, productos]);

  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <div className="row g-3 mt-5">
          <p className="d-block fs-4 text-muted ms-3 my-3">
            Resultados Busqueda:
          </p>
        </div>
        <div className="row hidden-md-up mt-5">
          {resultado.length === 0 ? (
            <>
              <div className="text-muted fs-1 text-center">
                Prenda no encontrada
              </div>
              <ImagenError
                className="mb-5 mx-auto rounded"
                src="https://cdn140.picsart.com/334012617052211.png"
                alt="error..."
              />
            </>
          ) : (
            resultado.map((producto) => (
              <ProductosCatalogo key={producto.id} producto={producto} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Buscar;
