import React from "react";
import forumIkonica from "../forumIkonica.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="image-wrapper">
        <img src={forumIkonica} alt="" className="dashboard-image" />
      </div>

      <div className="dashboard-links-wrapper">
        <div className="dashboard-links">
          <div className="dashboard-link font__p font__bold p__size">
            <Link to="/change-profile" className="dashboard-link-href">
              Promeni profil
            </Link>
          </div>

          <div className="dashboard-link font__p font__bold p__size">
            <Link to="/contact-us" className="dashboard-link-href">
              Kontaktiraj nas
            </Link>
          </div>

          <div className="dashboard-link font__p font__bold p__size">
            <Link to="/change-password" className="dashboard-link-href">
              Promeni lozinku
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
