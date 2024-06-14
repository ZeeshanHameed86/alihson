import { useDispatch } from "react-redux";
import { editUser } from "../reducers/userSlice";

const EditModal = ({ editUserModal, setEditUserModal }) => {
  const dispatch = useDispatch();
  const handleModalChange = (e) => {
    setEditUserModal({ ...editUserModal, [e.target.name]: e.target.value });
  };

  const handleModalSave = () => {
    dispatch(editUser(editUserModal));
    setEditUserModal(null);
  };

  const handleModalCancel = () => {
    setEditUserModal(null);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editUserModal.name}
            onChange={handleModalChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={editUserModal.username}
            onChange={handleModalChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={editUserModal.email}
            onChange={handleModalChange}
          />
        </label>
        <button onClick={handleModalSave} className="btn btn-edit">
          Save
        </button>
        <button onClick={handleModalCancel} className="btn btn-delete">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;
