//Este hook se encarga se obtener en cada cambio o actualizacion de la pagina al usuario autenticado
// para validar que este este logueado durante su navegacion

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [usuarioAuth, setUsuarioAuth] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      user ? setUsuarioAuth(user) : setUsuarioAuth(user);
    });
    return unsuscribe;
  }, []);

  return usuarioAuth;
};

export default useAuth;
