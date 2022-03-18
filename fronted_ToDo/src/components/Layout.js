import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
  return (
    <main>
      <nav className="navLayout">
        <Link to="/"><h1 className="h1Layout">Movies</h1></Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
