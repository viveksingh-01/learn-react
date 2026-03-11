import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 5000);
  };

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;

// NOTE:
// Here, we can observe that upon making any state change - either age or salary
// all the components are being re-rendered (as evident from the logs)
// so, we need to find a way that React re-renders only that component where the state change happens.

// The solution is "React.memo"
// React.memo is a higher-order function that will prevent a functional component from re-rendering
// if its props or state do not change.
