import styled from "@emotion/styled";

const DetalleCategorias = ({ categorias }) => {
  const IconoEtiqueta = styled.img`
    width: 24px;
  `;

  return (
    <div className="p-3 mt-1">
      <h5 className="card-text h5 mb-4">Categoria(s): </h5>
      {categorias.map((categoria) => (
        <div className="form-check float-start mx-1" key={categoria}>
          <IconoEtiqueta src="/etiqueta.png" alt="etiqueta" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {categoria}
          </label>
        </div>
      ))}
    </div>
  );
};

export default DetalleCategorias;
