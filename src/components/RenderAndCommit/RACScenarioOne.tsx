import React from "react";

const RACScenarioOne = () => {
  const [count, setCount] = React.useState(0);

  console.log("Render:", count);

  React.useEffect(() => {
    console.log("Effect:", count);
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
};

export default RACScenarioOne;

// LOGS
// Render: 0 -> Render: 1 -> Effect :1

/**
 * Explanation:
 * Initial render:
 * count = 0 → logs "Render: 0".
 * useEffect is scheduled, does not run yet.
 *
 * User clicks button → state update (setCount) triggers another render:
 * count = 1 → logs "Render: 1".
 *
 * Commit phase completes → useEffect runs:
 * Logs "Effect: 1".
 *
 * Key point: useEffect always runs after the commit, not during render.
 */
