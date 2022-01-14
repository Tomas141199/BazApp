import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const Message = ({ message, usuario, vendedor }) => {
  const propetario = usuario.uid === message.usuarioId ? "bg-propetario" : null;
  const isVendedor =
    message.usuarioId === vendedor ? (
      <span className="text-warning">★Vendedor</span>
    ) : null;
  const photo = message.photo ? message.photo : "/user.png";

  return (
    <div className={`media media-chat ${propetario}`}>
      <img className="avatar" src={photo} alt=".." /> {isVendedor}
      <div className="media-body">
        <p className="text-white">{message.mensaje}</p>
        <p className="meta text-bazapp-fuerte">
          <span className="me-1">{message.nombre}</span>
          <time>
            Hace: {formatDistanceToNow(new Date(message.hora), { locale: es })}
          </time>
        </p>
      </div>
    </div>
  );
};

export default Message;
