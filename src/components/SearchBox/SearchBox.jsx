import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) =>
    dispatch(setFilter(event.target.value));

  return (
    <div className={css.searchContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
