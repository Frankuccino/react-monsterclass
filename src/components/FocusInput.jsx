import { useRef } from "react";
import { BiConversation } from "react-icons/bi";
import { GiRugbyConversion } from "react-icons/gi";
import { HiOutlineRefresh } from "react-icons/hi";

const FocusInput = () => {
  const inputRef = useRef(null);

  const names = ["Frank", "Alice", "Zoro", "Luffy", "Nami", "Sanji"];

  const handleClick = () => {
    if (!inputRef) return;

    const randomIdx = Math.floor(Math.random() * names.length);
    const randomName = names[randomIdx];

    inputRef.current.focus();
    inputRef.current.value = randomName;
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2 style={{ margin: 0 }}>Focus on Input & Generate Random Name:</h2>
      <input
        type="text"
        ref={inputRef}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      />
      <button onClick={() => handleClick()}>
        <HiOutlineRefresh />
      </button>
    </div>
  );
};

export default FocusInput;
