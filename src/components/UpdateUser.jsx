import { useContext, useState } from "react";
import { Data } from "../contexts/UserContext";

const UpdateUser = () => {
  const { setName } = useContext(Data);
  const [tempName, setTempName] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!tempName || !tempName.length) return;

    setName(tempName);
    setTempName("");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <h2 style={{ margin: 0 }}>Update the name </h2>
      <form
        onSubmit={handleUpdate}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <input
          type="text"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #aaa",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Update name
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
