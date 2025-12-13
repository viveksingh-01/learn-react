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
 * Same Parent and Child components as before.
 * User clicks the increment button twice very quickly.
 *
 * LOGS:
 * Parent Render: 2
 * Child A Render
 * Child B Render
 * Parent LayoutEffect: 2
 * Child A LayoutEffect
 * Child B LayoutEffect
 * Parent Effect: 2
 * Child A Effect
 * Child B Effect
 *
 * EXPLANATION:
 *
 * 1. Automatic batching
 * Both rapid setCount updates are merged into one render pass.
 * The component renders once with the final state (count=2).
 * Logs for intermediate state (count=1) may never appear.
 *
 * 2. Render Phase
 * Still interruptible at the fiber level, but synchronous JS inside components always runs to completion.
 * Child components render once with the latest props/state.
 *
 * 3. Commit Phase
 * Updates DOM once for the batched state.
 *
 * 4. Effects
 * useLayoutEffect runs once, before paint.
 * useEffect runs once, after paint.
 * Effects are never run for intermediate states that were batched.
 */
