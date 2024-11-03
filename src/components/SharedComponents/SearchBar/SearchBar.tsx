import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../../images/Search_icon.svg";

const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Searching for: ${value}`);
    setValue("");
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <button type="submit" className={styles.searchButton}>
        <img src={searchIcon} alt="Search" className={styles.icon} />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.searchInput}
      />
    </form>
  );
};

export default SearchBar;
