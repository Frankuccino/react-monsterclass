import React from "react";

const Weather = ({ temperature }) => {
  return (
    <div>
      <h2>
        What's the feeling of the temperature outside if it's {temperature}{" "}
        &deg;C?
      </h2>
      {temperature > 25 ? (
        <p>It's hot outside!</p>
      ) : temperature < 15 ? (
        <p>It's cold outside!</p>
      ) : (
        <p>It's nice outside!</p>
      )}
    </div>
  );
};

export default Weather;
