import React from "react";

const UserProfileData = ({ userProfile }) => {
  return (
    <div className="data-items">
      <div className="font__p data-item">
        <p style={{ marginRight: ".4em" }} className="font__bold">
          Ime:
        </p>
        {userProfile.name}
      </div>

      <div className="font__p data-item">
        <p style={{ marginRight: ".4em" }} className="font__bold">
          Prezime:
        </p>{" "}
        {userProfile.last_name}
      </div>

      <div className="font__p data-item">
        <p style={{ marginRight: ".4em" }} className="font__bold">
          Korisničko ime:
        </p>{" "}
        {userProfile.username}
      </div>

      <div className="font__p data-item">
        <p style={{ marginRight: ".4em" }} className="font__bold">
          E-mail:
        </p>{" "}
        {userProfile.email}
      </div>
    </div>
  );
};

export default UserProfileData;
