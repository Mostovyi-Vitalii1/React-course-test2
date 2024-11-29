import React from "react";
import FilterInput from "./FilterInput";
import UserList from "./UserList";

const UserFetcher = ({
  fetchUsers,
  loading,
  users,
  filteredUsers,
  handleDelete,
  filter,
  setFilter,
}) => {
  return (
    <div>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      <FilterInput value={filter} onChange={setFilter} />
      <UserList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

export default UserFetcher;
