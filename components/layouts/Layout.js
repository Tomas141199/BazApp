import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <>
      <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <Sidebar />
        {/* <!-- Page Content  --> */}
        <div id="content">
          <Header />
          {props.children}
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Layout;
