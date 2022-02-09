import axios from "axios";
import { userLoaded } from "./userLoaded";
import {
  AUTH_FORM_SUCCESS,
  AUTH_FORM_FAIL,
} from "../../constants/auth.constants";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(userData);
    //userData je objekat koji cemo prosledjivati funkciji i koji ce sadrzati sve ono sto
    //se trazi za dole navedeni post zahtev definisan na backendu, dakle name, lastName, userName, email, password 

    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      body,
      config
    );

    dispatch({
      type: AUTH_FORM_SUCCESS,
      payload: response.data,
    });
    dispatch(userLoaded());
    //nakon uspesne registracije korisnika sada zelimo da ucitamo tog korisnika iz baze i imamo u stanju sve podatke u njemu
  } catch (error) {
    dispatch({
      type: AUTH_FORM_FAIL,
      payload: error,
    });
  }
};
