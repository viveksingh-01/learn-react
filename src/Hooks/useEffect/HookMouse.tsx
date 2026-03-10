import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e: MouseEvent) => {
    console.log("logging mouse position");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called - add mousemove listener");
    window.addEventListener("mousemove", logMousePosition);

    // useEffect provides us with a way which mimics the componentWillUnmount lifecycle method
    // using which we can return a function containing the cleanup activities
    // and React will run that function when the component unmounts.
    return () => {
      console.log("cleanup function called - remove mousemove listener");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {x}, Y - {y}
    </div>
  );
};

export default HookMouse;

// NOTE:
// Upon click of the toggle button in HookMouseContainer component, when the value of display is set to false
// the HookMouse component is unmounted from the DOM, but the event-listener
// is not removed yet, and continues listening even after the unmounting.
// Therefore, we need to implement the cleanup of listener using useEffect, just like
// its done in componentWillUnmount lifecycle method.
