import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";//uzima index.js

const middleware = [thunk];

const initialState = {};
//pocetno stanje reducera

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
  //funkcija koja nam omogucava koriscenje nasih middlewarea
);

export default store;
