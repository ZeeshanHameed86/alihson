import EditModal from "./EditModal";

const UserItem = ({
  user,
  editUserModal,
  setEditUserModal,
  handleEdit,
  handleDelete,
}) => {
  console.log({ user });
  return (
    <>
      <tr>
        <td style={{ width: "20%" }}>{user.id}</td>
        <td style={{ width: "20%" }}>{user.name}</td>
        <td style={{ width: "20%" }}>{user.username}</td>
        <td style={{ width: "30%" }}> {user.email}</td>
        <td style={{ width: "10%" }}>
          <button className="btn btn-edit" onClick={() => handleEdit(user)}>
            Edit
          </button>
          <button
            className="btn btn-delete"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
      {editUserModal && (
        <EditModal
          editUserModal={editUserModal}
          setEditUserModal={setEditUserModal}
        />
      )}
    </>
  );
};

export default UserItem;
