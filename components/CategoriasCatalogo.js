import Link from "next/link";

const CategoriasCatalogo = ({ cat }) => {
  function imprimeValor(e) {
    console.log(e.target.text);
  }
  const lista = cat.map((allCat) => (
    <li key={allCat.id}>
      <Link href="/categorias/[categoria]" as={`/categorias/${allCat.titulo}`}>
        <a className="dropdown-item" onClick={(e) => imprimeValor(e)}>
          {allCat.titulo}
        </a>
      </Link>
    </li>
  ));
  return (
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      {lista}
    </ul>
  );
};

export default CategoriasCatalogo;
