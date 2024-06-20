import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className="w-full bg-white ">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
