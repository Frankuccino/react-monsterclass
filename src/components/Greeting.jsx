const Greeting = ({ timeOfDay }) => {
  const date = new Date();
  const name = "Frank";

  return (
    <div>
      <h1>
        Hello,
        {timeOfDay === "morning" ? (
          <span> Good morning!</span>
        ) : (
          <span> Good afternoon!</span>
        )}
      </h1>
      <p>
        Today's Date is: {date.toDateString()} and my name is {name}
      </p>
    </div>
  );
};

export default Greeting;
