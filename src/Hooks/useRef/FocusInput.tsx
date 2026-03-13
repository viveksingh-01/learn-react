import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h2>useRef Hook</h2>
      <input ref={inputRef} type="text" placeholder="This is focused input" />
    </div>
  );
};

export default FocusInput;
