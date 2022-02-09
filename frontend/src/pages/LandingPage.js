import React from "react";
import forumIkonica from "../forumIkonica.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Dobrodošli na</p>
          <span>Cheesecake</span>
        </div>

        <div className="text-section font__p p__size" id="text-sekcija">
        Cheesecake je internetska društvena mreža koju su 2022. godine osnovali Maja, Marija i Luka, studenti Fakulteta organizacionih nauka.
          <br />
          Aplikacija je u pocetnoj fazi i trenutno je namenjena studentima fona koji mogu da objavljuju svoje postove.
          <br />
          <br />
          <br />
          <div className="text-button-wrapper">
            <Link to="/register">Registrujte se</Link> 
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={forumIkonica} className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
