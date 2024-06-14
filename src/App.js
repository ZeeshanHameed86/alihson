import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./reducers/userSlice";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="filter-container">
        <SearchBar />
        <Filter />
      </div>
      <UserList />
    </div>
  );
}

export default App;
