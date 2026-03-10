import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 'useEffect' effectively combines the power of componentDidMount and
  // componentDidUpdate together into a single block.
  // The below useEffect will run when the component is initially mounted (after first render)
  // and then upon every re-render.
  // in short, we can say that it will run after every render.
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `Clicked ${count} times.`;
  }, [count]);
  // To make React know that we want our component to re-render only when a certain state's value changes.
  // We need to pass another argument - a dependency array to the useEffect method.
  // Here, we've added the state - count in the dep array of useEffect so that our component re-renders
  // only when the value of count changes and, not when name's value changes.

  return (
    <div>
      <h2>Using Hooks!</h2>
      <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default HookCounter;
