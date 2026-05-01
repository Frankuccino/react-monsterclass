import { FaCartArrowDown, FaCompressArrowsAlt } from "react-icons/fa";

const Styling = () => {
  const styles = {
    color: "white",
    border: "3px black solid",
    borderRadius: "12px",
    backgroundColor: "rgb(146, 204, 255)",
    padding: "0 3rem",
  };

  return (
    <div>
      <h2>
        This is the cart icon <FaCartArrowDown />
      </h2>
      <h2>
        Do you like computers? <FaCompressArrowsAlt />
      </h2>
      <h1 style={styles}>Inline Style</h1>
    </div>
  );
};

export default Styling;

// There are 3 ways to introduce styling in React
// 1. Inline Styling
// {/* <h1 style={{
//     color: "white",
//     border: "3px black solid",
//     borderRadius: "12px",
//     backgroundColor: "rgb(146, 204, 255)",
//     padding: "0 3rem",
//   }}>Inline Style</h1> */}

// 2. Stored to a variable styling object then passing it to the style prop
// const styles = {
//   color: "white",
//   border: "3px black solid",
//   borderRadius: "12px",
//   backgroundColor: "rgb(146, 204, 255)",
//   padding: "0 3rem",
// };

// 3. External Stylesheet CSS File Styling
// import "./index.css";
