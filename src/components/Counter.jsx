import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const styles = {
    padding: "10px 30px",
    borderRadius: "10px",
    fontSize: "20px",
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={increment} style={styles}>
        Increment
      </button>
      <button style={styles} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
