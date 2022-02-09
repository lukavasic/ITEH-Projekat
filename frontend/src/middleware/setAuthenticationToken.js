import axios from "axios";

const setAuthenticationToken = (token) => {
  if (token) axios.defaults.headers.common["authentication-token"] = token;
  //ako je token u local storage
  //pristupamo nizu hedera iz kog uzimamo heder sa nazivom authentication-token
  //i u taj heder upisujemo vrednost naseg tokena iz local storage
  else delete axios.defaults.headers.common["authentication-token"];
};

export default setAuthenticationToken;
