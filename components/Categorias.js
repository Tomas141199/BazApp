const Categorias = ({ cat, setCategorias, categories }) => {
  const seleccionar = (e) => {
    if (e.target.classList.contains("linea-input")) {
      e.target.classList.remove("linea-input");
      e.target.classList.add("bg-bazapp", "text-white");
      setCategorias([...categories, e.target.textContent]);
    } else {
      e.target.classList.add("linea-input");
      e.target.classList.remove("bg-bazapp", "text-white");
      setCategorias(
        categories.filter((categorie) => categorie != e.target.textContent)
      );
    }
  };
  const categorias = cat;

  const lista = categorias.map((categoria) => (
    <li
      key={categoria.id}
      value={categoria.titulo}
      name={categoria.titulo}
      onClick={seleccionar}
      className="btn m-2 linea-input"
    >
      {categoria.titulo}
    </li>
  ));

  return <ul>{lista}</ul>;
};

export default Categorias;
