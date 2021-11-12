import "bootstrap/dist/css/bootstrap.css";
import fire, { FireContext } from "../fire";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const usuario = useAuth();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <FireContext.Provider value={{ fire, usuario }}>
      <Component {...pageProps} />
    </FireContext.Provider>
  );
}

export default MyApp;
