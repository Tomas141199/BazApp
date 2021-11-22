import Layout from "../../components/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductosCatalogo from "../../components/ProductosCatalogo";
import useProductos from "../../hooks/useProducto";
import CategoriasCatalogo from "../../components/CategoriasCatalogo";
import { TiposCategorias } from "../../utilities/categorias";
const ProductoCategoria = () => {
  const router = useRouter();

  const {
    query: { categoria },
  } = router;

  const { productos } = useProductos("creado");
  const [resultado, guardarResultado] = useState([]);
  const [error, guardarError] = useState(false);

  useEffect(() => {
    if (categoria) {
      const busqueda = categoria;
      const filtro = productos.filter((producto) => {
        return producto.categorias.includes(busqueda);
      });
      guardarResultado(filtro);
    }
  }, [categoria, productos]);

  console.log(resultado);
  return (
    <Layout>
      <div className="container my-5 rounded bg-light shadow-lg">
        <div className="row g-3 mt-5">
          <div className="dropdown">
            <p className="fs-4 text-muted ms-3 my-3 d-inline">Catálogo</p>
            <button
              className="btn bg-bazapp text-white dropdown-toggle d-inline ms-5 my-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {categoria && `${categoria} (${resultado.length})`}
            </button>

            <CategoriasCatalogo cat={TiposCategorias} />
          </div>
        </div>
        <div className="row hidden-md-up mt-5">
          {resultado.map((producto) => (
            <ProductosCatalogo key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductoCategoria;
