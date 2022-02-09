import React from "react";
import { Link } from "react-router-dom";
import forumIkonica from "../../forumIkonica.png";

const NavbarLogo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img
          src={forumIkonica}
          alt=""
          style={{ width: 250, height: 200, paddingTop: 20 }}
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
