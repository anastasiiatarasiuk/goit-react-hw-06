import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.container}>
      <p className={s.searchTitle}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        value={value}
        placeholder="Enter contact name..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
