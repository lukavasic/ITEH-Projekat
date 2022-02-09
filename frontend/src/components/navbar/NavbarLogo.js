import React from "react";
import { Link } from "react-router-dom";


const NavbarLogo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <h1 id="Logo"> Cheesecake </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
