import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  // 'useEffect' effectively combines the power of componentDidMount and
  // componentDidUpdate together into a single block.
  // The below useEffect will run when the component is initially mounted (after first render)
  // and then upon every re-render.
  // in short, we can say that it will run after every render.
  useEffect(() => {
    document.title = `Clicked ${count} times.`;
  });

  return (
    <div>
      <h2>Using Hooks!</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default HookCounter;
