import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import s from "./ContactsList.module.css";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

function ContasctsList() {
  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts, state.filter)
  );
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <ContasctsListItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContasctsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default ContasctsList;
