import s from "./Filter.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { handleFilter } from "../../redux/actions";

function Filter({ handleFilter, filter }) {
  const handleFilterChange = (e) => {
    handleFilter(e.currentTarget.value);
  };

  return (
    <label className={s.label}>
      search through your contacts
      <input
        placeholder="..."
        className={s.input}
        name="filterValue"
        onChange={handleFilterChange}
        value={filter}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

const mapStatetoProp = (state) => ({
  filter: state.filter,
});

const mapDispatchToProp = (dispatch) => ({
  handleFilter: (value) => dispatch(handleFilter(value)),
});

export default connect(mapStatetoProp, mapDispatchToProp)(Filter);
