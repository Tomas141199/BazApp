import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import fire, { FireContext } from "../fire";
import useAuth from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  const usuario = useAuth();
  return (
    <FireContext.Provider value={{ fire, usuario }}>
      <Component {...pageProps} />
    </FireContext.Provider>
  );
}

export default MyApp;

