import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(({ id, name, age }) => (
          <li key={id}>
            The person named {name} is age {age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
