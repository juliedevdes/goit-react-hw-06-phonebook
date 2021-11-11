import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import s from "./ContactsList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ContasctsList({ contacts }) {
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

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStatetoProp = (state) => ({
  contacts: getVisibleContacts(state.contacts, state.filter),
});

export default connect(mapStatetoProp)(ContasctsList);
