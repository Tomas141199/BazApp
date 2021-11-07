
const Categorias = ({ cat }) => {
    
  const categorias = cat;
  const lista = categorias.map((categoria ) =>
    <li key={categoria.id} value={categoria.titulo} name={categoria.titulo} 
    className="btn bg-bazapp text-white m-2">{categoria.titulo}</li>
  );

  return (
      <ul>{lista}</ul>
    );
  };
  
  export default Categorias;