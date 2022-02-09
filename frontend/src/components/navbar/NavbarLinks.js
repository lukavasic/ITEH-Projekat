import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = ({ isLoggedIn, logOut }) => {
  return (
    <div className="nav-links">
      <Link to="/users" className="href__style__remove nav__link">
        Korisnici
        <i className="fas fa-user" style={{ color: "rgb(99, 82, 24)" }}></i>
      </Link>

      <Link to="/topics" className="href__style__remove nav__link">
        Postovi{" "}
        <i className="fas fa-comments" style={{ color: "rgb(99, 82, 24)" }}></i>
      </Link>

      <Link
        to="/login"
        className="href__style__remove nav__link"
        style={{ display: isLoggedIn ? "none" : "flex" }}
      >
        Uloguj se
      </Link>

      <Link
        to="/register"
        className="href__style__remove nav__link"
        style={{ display: isLoggedIn ? "none" : "flex" }}
      >
        Registracija
      </Link>

      <Link
        to="/account"
        className="href__style__remove nav__link"
        style={{ display: isLoggedIn ? "flex" : "none" }}
      >
        Nalog{" "}
        <i
          className="fas fa-address-card"
          style={{ color: "rgb(99, 82, 24)" }}
        ></i>
      </Link>

      <Link
        to="/add-post"
        className="href__style__remove nav__link"
        style={{ display: isLoggedIn ? "flex" : "none" }}
      >
        Napiši post{" "}
        <i className="fas fa-edit" style={{ color: "rgb(99, 82, 24)" }}></i>
      </Link>

      <Link
        to="/login"
        className="href__style__remove nav__link"
        onClick={() => logOut()}
        style={{ display: isLoggedIn ? "flex" : "none" }}
      >
        Odjava{" "}
        <i
          className="fas fa-sign-out-alt"
          style={{ color: "rgb(99, 82, 24)" }}
        ></i>
      </Link>
    </div>
  );
};

export default NavbarLinks;
