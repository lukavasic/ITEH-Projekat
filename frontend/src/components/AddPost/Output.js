import React from "react";
import { Link } from "react-router-dom";

const Output = ({ clearPost }) => {
  return (
    <div className="output">
      <div className="output-header">
        <p className="font__bold font__p app_color_font">Postavljen post</p>
      </div>
      <div className="output-buttons-wrapper">
        <div className="output-buttons">
          <div
            onClick={() => clearPost()}
            className="new-post output-button app_color_background"
          >
            <p className="p__size font__p">Dodaj novi post</p>
          </div>
          <div className="view-comment output-button app_color_background">
            <Link
              to="/topics"
              className="white__color__font"
              style={{ textDecoration: "none" }}
            >
              <p className="p__size font__p">Pogledaj postove</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
