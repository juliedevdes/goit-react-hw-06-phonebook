import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { v4 as uuidv4 } from "uuid";

const formInitialState = {
  name: "",
  number: "",
  id: uuidv4(),
};

const formReducer = (state = formInitialState, { type, payload }) => {
  switch (type) {
    case "HANDLE_INPUT_NAME":
      return { ...state, name: payload };
    case "HANDLE_INPUT_NUMBER":
      return { ...state, number: payload };
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  return state;
};

const contactsReducer = (state = [], { type, payload }) => {
  return state;
};

const rootReducer = combineReducers({
  form: formReducer,
  filter: filterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
