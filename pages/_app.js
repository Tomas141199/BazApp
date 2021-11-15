import "bootstrap/dist/css/bootstrap.css";
import fire, { FireContext } from "../fire";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

//Config Progress bar
const progress = new ProgressBar({
  size: 4,
  color: "#915480",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

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
