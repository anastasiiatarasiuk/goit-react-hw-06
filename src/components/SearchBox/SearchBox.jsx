import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p className={s.searchTitle}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        value={value}
        placeholder="Enter contact name..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
