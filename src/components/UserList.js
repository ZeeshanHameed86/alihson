import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, removeUser } from "../reducers/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { filteredUsers, status, error } = useSelector((state) => state.users);
  const [editUserModal, setEditUserModal] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditUserModal(user);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(removeUser(id));
    }
  };

  return (
    <div className="App">
      <div className="user-list-container">
        <h1>User List</h1>
        {status === "loading" && <div className="loader">Loading...</div>}
        {status === "failed" && <div className="error">Error: {error}</div>}
        {status === "succeeded" && filteredUsers.length > 0 && (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                return (
                  <UserItem
                    user={user}
                    editUserModal={editUserModal}
                    setEditUserModal={setEditUserModal}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserList;
