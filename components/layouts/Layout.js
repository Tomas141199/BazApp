import Header from "./Header";
import AgregarProducto from "./AgregarProducto";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}
      <AgregarProducto/>
      </main>
      
    </>
  );
};

export default Layout;
