import React, { useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = () => {
    // mimicking an expensive/time-taking operation
    let i = 0;
    while (i < 2000000000) i++;

    return counterOne % 2 == 0;
  };

  return (
    <div>
      <h2>useMemo Hook</h2>
      <div>
        <button onClick={() => setCounterOne(counterOne + 1)}>CounterOne - {counterOne}</button>
        <span style={{ marginLeft: "4px" }}>{isEven() ? "EVEN" : "ODD"}</span>
      </div>
      <div>
        <button onClick={() => setCounterTwo(counterTwo + 1)}>CounterTwo - {counterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;

// NOTE:
// We observe that when we click on CounterOne button, the process takes relatively more time because
// of the performance-heavy operation in isEven function.
// But the major problem is that even the click on CounterTwo button takes time, since the
// Counter component re-renders when the counterTwo state changes and therefore isEven is invoked again
// and the expensive computation happens for every re-render.
// Therefore, we need to tell React not to calculate certain values when not necessary, especially
// the ones which take more time.
// So, how do we prevent the computation inside isEven to happen when counterTwo changes?
// The solution is useMemo hook!
