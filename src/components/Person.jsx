const Person = ({ name, age }) => {
  return (
    <div>
      <h2>Person's {name}</h2>
      <p>
        {name} is {age} years old.
      </p>
    </div>
  );
};

export default Person;
