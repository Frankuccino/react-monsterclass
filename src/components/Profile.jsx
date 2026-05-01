import { useState } from "react";

const Profile = () => {
  const userProfile = {
    name: "Frank",
    age: 23,
  };

  const [user, setUser] = useState(userProfile);
  const [currentName, setCurrentName] = useState("");
  const [currentAge, setCurrentAge] = useState("");

  const handleOnChangeName = (e) => {
    setCurrentName(e.target.value);
  };
  const handleOnChangeAge = (e) => {
    setCurrentAge(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!currentName || !currentAge || currentAge <= 0) return;

    setUser({ ...user, name: currentName, age: Number(currentAge) });
    setCurrentName("");
    setCurrentAge("");
  };

  return (
    <div>
      <h2>User Profile:</h2>
      <h3>
        User's name is {user.name} with Age: {user.age}
      </h3>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Update name here"
          value={currentName}
          onChange={handleOnChangeName}
        />
        <input
          type="number"
          placeholder="Update age here"
          value={currentAge}
          onChange={handleOnChangeAge}
        />
        <button type="submit">Update information!</button>
      </form>
    </div>
  );
};

export default Profile;
