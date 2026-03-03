import React from "react";
import ClassCounter from "./src/Hooks/useEffect/ClassCounter";
import HookCounter from "./src/Hooks/useEffect/HookCounter";

const App = () => {
  return (
    <main>
      <ClassCounter />
      <HookCounter />
    </main>
  );
};

export default App;
