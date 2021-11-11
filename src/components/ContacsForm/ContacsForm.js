// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleInputName, handleInputNumber } from "../../redux/actions";
// import store from "../../redux/store";
// import { handleInputName } from "../../redux/actions";

function ContacsForm({
  onSubmit,
  name,
  number,
  id,
  handleInputName,
  handleInputNumber,
}) {
  // const [name, setName] = useState("");
  // const [number, setNum] = useState("");
  // const [id, setId] = useState(uuidv4());

  // const handleInputChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   switch (name) {
  //     case "name":
  //       setName(value);
  //       break;
  //     case "number":
  //       setNum(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ name, number, id });
  //   reset();
  // };

  // const reset = () => {
  //   setId(uuidv4());
  //   setNum("");
  //   setName("");
  // };

  return (
    <forms>
      <label>
        name:
        <input
          className={s.inputName}
          placeholder="Jane Wayeet"
          name="name"
          onChange={handleInputName}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          required
        />
      </label>
      <label className={s.label}>
        number:
        <input
          className={s.inputNum}
          placeholder="+ 00-000-00"
          name="number"
          onChange={handleInputNumber}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          type="tel"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        add contact
      </button>
    </forms>
  );
}

ContacsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { name: state.name, number: state.number, id: state.id };
};

const mapDispatchToProp = (dispatch) => ({
  handleInputName: (e) => dispatch(handleInputName(e.currentTarget.value)),
  handleInputNumber: (e) => dispatch(handleInputNumber(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProp)(ContacsForm);
