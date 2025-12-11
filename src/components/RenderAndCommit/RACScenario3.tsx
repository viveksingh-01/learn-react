import React, { useEffect, useLayoutEffect, useState } from "react";

const RACScenario3 = () => {
  const [count, setCount] = useState(0);

  console.log("Render:", count);

  useLayoutEffect(() => {
    console.log("LayoutEffect:", count);
  });

  useEffect(() => {
    console.log("Effect:", count);
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default RACScenario3;

/**
 * SITUATION:
 * App is running in concurrent mode (createRoot used).
 * User clicks the button to increment count.
 * React may interrupt the render if higher-priority updates arrive.
 *
 * LOGS:
 * Render: 1 -> LayoutEffect: 1 -> Effect: 1
 *
 * EXPLANATION:
 * Render phase
 * React starts rendering App for count = 1.
 * console.log("Render:", 1) runs.
 * In concurrent mode, this render can be paused before commit,
 * but the JS inside your component runs synchronously, so the render log always appears.
 *
 * Commit phase
 * Once React finishes a render pass, it applies the DOM updates.
 * Then it runs useLayoutEffect synchronously, before the browser paints.
 * That’s why "LayoutEffect: 1" is guaranteed to run before paint.
 * useEffect runs asynchronously after the browser paints, so "Effect: 1" happens later.
 *
 * Interruptions
 * React can interrupt the render phase for other components,
 * but effects run in commit phase after the current render is completed.
 * useLayoutEffect timing is always consistent: synchronous after DOM mutation but before paint.
 *
 * NOTE:
 * useLayoutEffect always runs before the browser paints, but only after a render pass fully completes.
 * Interrupted renders do not trigger effects; effects run only after completed renders enter commit.
 *
 *
 * SUPER IMPORTANT!!!
 * Render interrupted → no commit → no effects run.
 * Render completes → commit → useLayoutEffect runs before paint, useEffect runs after paint.
 */
