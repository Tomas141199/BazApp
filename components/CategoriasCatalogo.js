const CategoriasCatalogo = ({cat}) => {

    const lista = cat.map((allCat) => (
        <li>
            <a className="dropdown-item" href="#">
                {allCat.titulo}
            </a>
        </li>
    ));
    return <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">{lista}</ul>;
};

export default CategoriasCatalogo;