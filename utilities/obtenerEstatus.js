export const getEstatus = (key) => {
  let estatus = "";
  switch (key) {
    case 0:
      estatus = "Disponible";
      break;
    case 1:
      estatus = "En Negociacion";
      break;
    case 2:
      estatus = "Vendido";
      break;
    default:
      estatus = "Sin Estatus";
      break;
  }
  return estatus;
};

export default getEstatus;
