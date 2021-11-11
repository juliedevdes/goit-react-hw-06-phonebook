import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "HANDLE_FILTER":
      return `${payload}`;
    default:
      return state;
  }
};

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SUBMIT":
      if (state.some((el) => el.name === payload.name)) {
        alert("There is already contact with the same name");
        return state;
      }
      return [...state, payload];
    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
