import "../styles/globals.css";
import fire, { FireContext } from "../fire";

function MyApp({ Component, pageProps }) {
  const ejem = "hola";
  return (
    <FireContext.Provider value={{ fire, ejem }}>
      <Component {...pageProps} />
    </FireContext.Provider>
  );
}

export default MyApp;
