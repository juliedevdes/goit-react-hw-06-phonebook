import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { submit } from "../../redux/actions";

function ContacsForm() {
  const [name, setName] = useState("");
  const [number, setNum] = useState("");
  const [id, setId] = useState(uuidv4());

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNum(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit({ name, number, id }));
    reset();
  };

  const reset = () => {
    setId(uuidv4());
    setNum("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          className={s.inputName}
          placeholder="Jane Wayeet"
          name="name"
          onChange={handleInputChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          required
        />
      </label>
      <label className={s.labelNum}>
        number:
        <input
          className={s.inputNum}
          placeholder="+ 00-000-00"
          name="number"
          onChange={handleInputChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          type="tel"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        add contact
      </button>
    </form>
  );
}

ContacsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContacsForm;
