import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="topic-wrapper">
      <div className="topic-user">
        <img src={user.avatar} className="topic-avatar" alt="" />
        <p className=" p__size font__p">{user.userName}</p>
      </div>

      <div className="topic-section">
        <div className="topic-section-links">
          <div className="link-to-post-page-button app_color_background  font__p font__bold p__size">
            <Link to={`/users/user/${user._id}`}>Pogledaj profil</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
