import React from "react";
import Footer from "../footer/Footer";
import NavbarDefault from "../navbar/NavbarDefault";
import Nav from "../navbar/NavbarDefault";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
