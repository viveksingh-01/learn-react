import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

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

// What is useCallback?
// useCallback is a hook that returns a memoized version of the callback function that only changes if
// one of the dependencies has changed.

// Why it is useful?
// It is useful when passing callback functions as props to optimized child components (as in our case - React.memo)
// that rely only on reference equality to prevent unnecessary re-renders.

// In our case, using useCallback hook, we can cache the incrementSalary function and add the salary as dependency
// so that only when there is change in the salary, a new incrementSalary function is created and returned.

// ----------------------------------------------------------------------------------------------------------

// OLDER NOTES:
// Here, we can observe that upon making any state change - either age or salary
// all the components are being re-rendered (as evident from the logs)
// so, we need to find a way that React re-renders only that component where the state change happens.

// The solution is "React.memo"
// React.memo is a higher-order function that will prevent a functional component from re-rendering
// if its props or state do not change.
