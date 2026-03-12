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
// After applying React.memo, we have prevented re-rendering of Title and Count components
// but we can see that the Button component for incrementing salary still re-renders when the one
// to increment the age is clicked and vice-versa.
// REASON:
// Whenever we click on the button to increment age, the ParentComponent re-renders with the new age-state,
// it creates a new 'incrementSalary' function (and incrementAge as well) upon every re-render.
// When dealing with functions, we always need to consider the reference-equality (like Objects), this means
// the function before the re-render is not same as the function created after the re-render.
// and since we are passing this new function to handleClick prop of the Button component, React.memo treats
// it as a change in props and hence re-renders the Button component.

// Now, how do we tell React that we don't need to create a new 'incrementSalary' function when we increment
// the age, and vice-versa? The answer is useCallback hook!

// ----------------------------------------------------------------------------------------------------------

// OLDER NOTES:
// Here, we can observe that upon making any state change - either age or salary
// all the components are being re-rendered (as evident from the logs)
// so, we need to find a way that React re-renders only that component where the state change happens.

// The solution is "React.memo"
// React.memo is a higher-order function that will prevent a functional component from re-rendering
// if its props or state do not change.
