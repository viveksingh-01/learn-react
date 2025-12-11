import React, { useEffect, useLayoutEffect, useState } from "react";

const RACScenario3B = () => {
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

export default RACScenario3B;

/**
 * SITUATION:
 * App is running in concurrent mode (createRoot).
 * User clicks the button twice very quickly.
 * React automatically batches state updates in concurrent mode.
 *
 * LOGS:
 * Render: 2 -> LayoutEffect: 2 -> Effect: 2
 *
 * EXPLANATION:
 * Concurrent mode automatic batching
 * React 18+ automatically batches multiple state updates that happen within the same event loop tick,
 * even if they come from separate clicks or promises.
 * In this case, two rapid setCount calls are batched into one render pass.
 *
 * Render phase
 * The component may render only once, with count = 2.
 * So you may only see Render: 2 logged.
 * Render: 1 may never appear because the first update was batched into the second.
 *
 * Commit phase & Effects
 * useLayoutEffect runs once, after commit, before paint, for the final state (count = 2).
 * useEffect runs once, asynchronously after paint.
 * So the effects do not run for intermediate states that were batched.
 *
 * DOM updates
 * The DOM is updated once, reflecting the final state (count = 2).
 *
 * Key takeaway
 * Concurrent mode + automatic batching → multiple rapid state updates may result
 * in fewer renders and fewer effects.
 * useLayoutEffect and useEffect always run after commit, not after each individual state update if batched.
 * This is why React 18+ apps are more efficient: fewer renders, fewer DOM mutations.
 */
