import React, { useState } from "react";
import { loginUser } from "../actions/auth.actions/loginUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const LoginPage = ({ loginUser, error }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const onChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <main className="register-page-wrapper">
      <form className="register-section">
        <div className="inputs-wrapper">
          <header className="register-header-wrapper">
            <p className=" p__size register-header">
              <i className="fas fa-users users-icon app_color_font"></i>
              Prijavi se
            </p>
          </header>

          <div className="label-wrapper">
            <label className="label__register p__size">E-mail</label>
          </div>
          <input
            name="email"
            value={email}
            type="email"
            onChange={(e) => onChange(e)}
          />

          <div className="label-wrapper">
            <label className="label__register p__size">Lozinka</label>
          </div>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => onChange(e)}
          />

          <div className="label-wrapper">
            <Link to="/register">
              <p className="p__size  password__info">Registruj se</p>
            </Link>
          </div>
          {error && (error !== null || error !== "" || error !== {}) && (
            <ErrorMessage errorMessage="Pogrešno korisničko ime ili lozinka" />
          )}

          <div
            className="button-wrapper app_color_background"
            onClick={(e) => loginUser(userData)}
          >
            <p className="button-letter">Prijavi se</p>
          </div>
        </div>
      </form>
    </main>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.errors, //iz reducera, isLoggedIn
});

export default connect(mapStateToProps, { loginUser })(LoginPage);
