import axios from "axios";

const baseUrl = "https://reqres.in/api";

export const getUsers = () => axios.get(`${baseUrl}/users`);

export const deleteUser = (id) => axios.delete(`${baseUrl}/users/${id}`);
