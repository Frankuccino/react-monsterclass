import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Hello world, I'm a use Effect");
  });

  return (
    <div>
      <h2>Basic useEffect: check the console.</h2>
    </div>
  );
};

export default BasicEffect;
