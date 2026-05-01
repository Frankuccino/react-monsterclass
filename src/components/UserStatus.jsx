const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      <h3>User status message:</h3>
      {(loggedIn && isAdmin && <p>Welcome Admin</p>) ||
        (loggedIn && <p>Welcome User</p>) ||
        (!loggedIn && <p>Please log in</p>)}
    </div>
  );
};

export default UserStatus;
