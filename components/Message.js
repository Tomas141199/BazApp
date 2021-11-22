import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const Message = ({ message, usuario, vendedor }) => {
  const propetario = usuario.uid === message.usuarioId ? "bg-propetario" : null;
  const isVendedor =
    message.usuarioId === vendedor ? (
      <span className="text-warning">★Vendedor</span>
    ) : null;

  return (
    <div className={`media media-chat ${propetario}`}>
      <img className="avatar" src={message.photo} alt=".." /> {isVendedor}
      <div className="media-body">
        <p className="text-white">{message.mensaje}</p>
        <p className="meta text-bazapp-fuerte">
          <time>
            Hace: {formatDistanceToNow(new Date(message.hora), { locale: es })}
          </time>
        </p>
      </div>
    </div>
  );
};

export default Message;
