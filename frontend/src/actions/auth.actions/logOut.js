import { LOG_OUT } from "../../constants/auth.constants";
export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  //zelimo samo da trigerujemo preko tipa desavanja u reduceru u switchu
};
