import { useContext } from "react";
import { Data } from "../contexts/UserContext";

const UserProfile = () => {
  const { name } = useContext(Data);
  console.log(`${name} from UserProfile`);
  return (
    <div>
      <h2>Username is {name}</h2>
    </div>
  );
};

export default UserProfile;
