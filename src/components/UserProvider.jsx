import { useState } from "react";
import { Data } from "../contexts/UserContext";

const UserProvider = ({ children }) => {
  const username = "Frank";
  console.log(`${username} from UserContext`);

  const [name, setName] = useState(username);

  return <Data.Provider value={{ name, setName }}>{children}</Data.Provider>;
};

export default UserProvider;
// Remember to have this Imported in the App not the UserProfile as this Component holds the Provider value.
