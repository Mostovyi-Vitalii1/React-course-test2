import React from "react";
import useUsers from "./hooks/useUsers";
import UserFetcher from "./components/UserFetcher";

const App = () => {
  const {
    users,
    filteredUsers,
    filter,
    loading,
    fetchUsers,
    handleDelete,
    setFilter,
  } = useUsers();

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <UserFetcher
        fetchUsers={fetchUsers}
        loading={loading}
        users={users}
        filteredUsers={filteredUsers}
        handleDelete={handleDelete}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
