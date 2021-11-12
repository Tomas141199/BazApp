import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

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
    </>
  );
};

export default Layout;
