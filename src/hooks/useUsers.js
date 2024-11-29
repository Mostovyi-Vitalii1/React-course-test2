import { useState, useEffect, useCallback } from "react";
import { getUsers, deleteUser } from "../services/apiMethods";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const lowercasedFilter = filter.toLowerCase();
    setFilteredUsers(
      users.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(lowercasedFilter)
      )
    );
  }, [filter, users]);

  const handleDelete = useCallback(async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }, []);

  return {
    users,
    filteredUsers,
    filter,
    loading,
    fetchUsers,
    handleDelete,
    setFilter,
  };
};

export default useUsers;
