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
