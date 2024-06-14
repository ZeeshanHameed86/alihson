import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUsers, filterUsers } from "../reducers/userSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [filterKey, setFilterKey] = useState("username");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterKeyChange = (e) => {
    setFilterKey(e.target.value);
    setFilterValue("");
    dispatch(filterUsers({ key: e.target.value, value: "" }));
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
    dispatch(filterUsers({ key: filterKey, value: e.target.value }));
  };

  return (
    <div>
      <select value={filterKey} onChange={handleFilterKeyChange}>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>
      <input
        type="text"
        placeholder={`Filter by ${filterKey}`}
        value={filterValue}
        onChange={handleFilterValueChange}
      />
    </div>
  );
};

export default Filter;
