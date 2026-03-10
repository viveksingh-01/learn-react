import React from "react";
import ComponentC from "./src/Hooks/useContext/ComponentC";

const userName = "Mike";

const App = () => {
  return (
    <main>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}

      <ComponentC name={userName} />
    </main>
  );
};

export default App;
