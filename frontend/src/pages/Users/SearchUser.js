import React, { useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users.actions/getUsers";
import { searchByUsername } from "../../actions/users.actions/searchByUsername";

const SearchUser = () => {
  let [searchedUsername, setSearchedUsername] = useState("");

  const onChange = (e) => setSearchedUsername(e.target.value);

  const searchForUser = () => {
    if (searchedUsername === "" || searchedUsername === null) getUsers();
    else searchByUsername(searchedUsername);
  };
  return (
    <header className="users-header">
      <p className="app_color_font font__bold users-headline">Korisnici</p>
      <br />

      <form className="search-user-wrapper">
        <textarea
          type="text"
          onChange={(e) => onChange(e)}
          value={searchedUsername}
        />

        <div
          className="user-search-button app_color_background font__bold"
          onClick={() => searchForUser()}
        >
          Pretraži korisnike
        </div>
      </form>
    </header>
  );
};

export default connect(null, { searchByUsername, getUsers })(SearchUser);
