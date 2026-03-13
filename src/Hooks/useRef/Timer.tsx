import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>useRef Hook</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }}
      >
        Stop
      </button>
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

// useRef hook can not only be used to refer a DOM node, but also
// it can be used to hold a reference to any mutable value, and make it persist through the re-renders.
