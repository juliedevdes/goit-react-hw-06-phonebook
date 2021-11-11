import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";

import useLocalSt from "./hooks/useLocalSt";

import s from "./App.module.css";

export default function App() {
  // const [contacts, setContacts] = useLocalSt("contacts", []);
  // const [filter, setFilter] = useLocalSt("filter", "");

  // const removeContact = (contactId) => {
  //   setContacts((s) => s.filter((contact) => contact.id !== contactId));
  // };

  // const updateFilter = (value) => {
  //   setFilter(value);
  // };

  return (
    <div className={s.root}>
      <h2>Phonebook</h2>
      <ContacsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContasctsList />
    </div>
  );
}
