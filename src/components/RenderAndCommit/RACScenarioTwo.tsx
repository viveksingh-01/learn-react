import React from "react";

const RACScenarioTwo = () => {
  const ref = React.useRef();

  console.log("Render");

  React.useLayoutEffect(() => {
    ref.current.style.backgroundColor = "red";
    console.log("LayoutEffect");
  });

  React.useEffect(() => {
    console.log("Effect");
  });

  return <div ref={ref}>Hello</div>;
};

export default RACScenarioTwo;

// LOGS
// Render -> LayoutEffect -> Effect

/**
 * Step 1: Render Phase
 * React calls RACScenarioTwo() to get the virtual DOM.
 * ref is created via useRef().
 * Nothing is mutated yet, DOM is not changed.
 * At this point:
 * console.log("LayoutEffect") has not run
 * console.log("Effect") has not run
 *
 * Step 2: Commit Phase
 * React updates the real DOM (adds <div>Hello</div> to the page).
 * DOM exists, so we can now safely run effects.
 *
 * Step 3: Effect Timing
 * useLayoutEffect
 * Runs synchronously after DOM updates but before the browser paints.
 * That means ref.current exists and we can safely mutate it.
 * So ref.current.style.backgroundColor = "red" happens immediately, before the user sees anything.
 * console.log("LayoutEffect") is logged first.
 *
 * Browser Paint
 * The browser now paints the screen.
 * User sees the div with red background already applied.
 *
 * useEffect
 * Runs after the browser has painted.
 * console.log("Effect") is logged.
 *
 * Order of Execution:
 * Render phase: nothing is logged
 * Commit phase:
 * DOM updates → useLayoutEffect runs → "LayoutEffect"
 * Browser paints → user sees red box
 * useEffect runs → "Effect"
 */
