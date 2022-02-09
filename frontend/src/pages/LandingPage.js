import React from "react";
import forumIkonica from "../forumIkonica.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Dobrodošli na</p>
          <span>Fesbuk</span>
        </div>

        <div className="text-section font__p p__size">
          Dobrodosli na mrezu kao Facebook, samo bolje na nas nacin
          <br />
          Ukoliko ste u potrazi za mrezom koja ne prodaje vase podatke, na
          pravom ste mestu.
          <br />
          <br />
          <br />
          <div className="text-button-wrapper">
            <Link to="/register">Regustrujte se</Link> i započnite!
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
