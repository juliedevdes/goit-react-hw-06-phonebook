import { configureStore, createReducer } from "@reduxjs/toolkit";
import { handleFilter, deleteContact, submit } from "./actions";

const filterReducer = createReducer("", {
  [handleFilter]: (_, { payload }) => `${payload}`,
});

const contactsReducer = createReducer([], {
  [submit]: (state, { payload }) => {
    if (state.some((el) => el.name === payload.name)) {
      alert("There is already contact with the same name");
      return state;
    }
    window.localStorage.setItem(
      "contacts",
      JSON.stringify([...state, payload])
    );
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => {
    const clearedContacts = state.filter((contact) => contact.id !== payload);
    window.localStorage.setItem("contacts", JSON.stringify(clearedContacts));
    return clearedContacts;
  },
});

const storageContacts = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
  preloadedState: storageContacts,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
