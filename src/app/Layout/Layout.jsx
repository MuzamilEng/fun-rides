import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <main className=" overflow-x-hidden z-10">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
