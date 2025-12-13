import React, { useEffect, useLayoutEffect, useState } from "react";

function Child({ label }) {
  console.log(`${label} Render`);

  useLayoutEffect(() => {
    console.log(`${label} LayoutEffect`);
  });

  useEffect(() => {
    console.log(`${label} Effect`);
  });

  return <div>{label}</div>;
}

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Render:", count);

  useLayoutEffect(() => {
    console.log("Parent LayoutEffect:", count);
  });

  useEffect(() => {
    console.log("Parent Effect:", count);
  });

  return (
    <div>
      <Child label="Child A" />
      <Child label="Child B" />
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

/**
 * SITUATION:
 * App is running in concurrent mode (createRoot).
 * User clicks the increment button once.
 * React schedules Parent and both Child components to render.
 *
 * LOGS:
 * Parent Render: 1
 * Child A Render
 * Child B Render
 * Parent LayoutEffect: 1
 * Child A LayoutEffect
 * Child B LayoutEffect
 * Parent Effect: 1
 * Child A Effect
 * Child B Effect
 *
 * EXPLANATION:
 *
 * 1. Render Phase (Interruptible, Pure)
 * React calls the component functions synchronously:
 * Parent renders → console.log("Parent Render:", count)
 * Child A renders → console.log("Child A Render")
 * Child B renders → console.log("Child B Render")
 * No DOM updates yet.
 * This phase can be paused or restarted if higher-priority updates arrive,
 * but the synchronous JS inside each function always runs to completion.
 *
 * 2. Commit Phase (Synchronous, Once Render Completed)
 * React applies DOM updates for Parent and Children.
 *
 * 3. useLayoutEffect Phase (After DOM update, Before Paint)
 * Runs synchronously after DOM mutations but before the browser paints:
 * "Parent LayoutEffect:", count
 * "Child A LayoutEffect"
 * "Child B LayoutEffect"
 *
 * 4. useEffect Phase (After Paint, Async)
 * Runs after paint:
 * "Parent Effect:", count
 * "Child A Effect"
 * "Child B Effect"
 */
