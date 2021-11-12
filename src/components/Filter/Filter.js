import s from "./Filter.module.css";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { handleFilter } from "../../redux/actions";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    dispatch(handleFilter(e.currentTarget.value));
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

export default Filter;
