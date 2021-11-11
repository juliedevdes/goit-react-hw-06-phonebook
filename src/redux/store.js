import { createStore, combineReducers } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";

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
      window.localStorage.setItem(
        "contacts",
        JSON.stringify([...state, payload])
      );
      return [...state, payload];
    case "DELETE_CONTACT":
      const clearedContacts = state.filter((contact) => contact.id !== payload);
      window.localStorage.setItem("contacts", JSON.stringify(clearedContacts));
      return clearedContacts;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
});
export default store;
