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
