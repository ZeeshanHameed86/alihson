import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get(API_URL);
export const updateUser = (user) => axios.put(`${API_URL}/${user.id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
