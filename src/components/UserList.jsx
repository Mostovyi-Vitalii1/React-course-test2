import React from "react";

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-card-container">
      {users.length ? (
        users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <p>
              {user.first_name} {user.last_name}
            </p>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
