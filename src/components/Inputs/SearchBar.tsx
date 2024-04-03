import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.css'; 

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <AiOutlineSearch className={styles.searchIcon} />
      <input className={styles.searchInput} type="text" placeholder="Search something here!" />
    </div>
  );
};

export default SearchBar;
