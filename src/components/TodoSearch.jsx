import React from "react";
import "../styles/TodoSearch.css";

export const TodoSearch = ({ searchValue, setSearchValue }) => {

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Agregar..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
      {searchValue}
    </>
  );
};
