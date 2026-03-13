import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>useRef Hook</h2>
      <p>{count}</p>
      {/* <button onClick={() => clearInterval(interval)}>Stop</button> */}
    </div>
  );
};

export default Timer;

// NOTE:
// If we want to clear the timer interval using a button, it's not possible because we can't access
// interval variable outside the useEffect.
// Even if want to create the interval variable outside the useEffect block, it will be useless because
// it will be declared over and over again with every re-render, and it's value will remain undefined.
// So, we need a way to have access to the interval variable which persists through the re-renders.
// The solution is useRef Hook!
