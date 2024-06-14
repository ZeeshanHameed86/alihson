import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUsers } from "../reducers/userSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchUsers(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBar;
