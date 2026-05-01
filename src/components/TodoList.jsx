import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  };
  const submitEvent = (e) => {
    e.preventDefault();
    if (currentInput.trim() === "") return;

    setList([...list, currentInput]);

    setCurrentInput("");
  };

  const resetHandler = () => {
    setList([]);
  };
  const bigger = {
    padding: "20px",
    borderRadius: "10px",
    margin: "5px",
    fontSize: "16px",
  };

  return (
    <div>
      <h2>List of Todo Items</h2>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <form onSubmit={submitEvent}>
        <input
          type="text"
          onChange={handleChange}
          value={currentInput}
          placeholder="Enter a todo item"
          style={bigger}
        />
        <button style={bigger} type="submit">
          Add to do Item!
        </button>
      </form>
      <button
        style={{
          ...bigger,
          backgroundColor: "red",
          fontWeight: 800,
          color: "#fff",
        }}
        onClick={resetHandler}
      >
        Reset the list
      </button>
    </div>
  );
};

export default TodoList;
