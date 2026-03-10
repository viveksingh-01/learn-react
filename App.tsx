import React, { createContext } from "react";
import ComponentC from "./src/Hooks/useContext/ComponentC";

const userName = "Mike";
export const UserContext = createContext("");

const App = () => {
  return (
    <main>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}

      <UserContext.Provider value={userName}>
        <ComponentC />
      </UserContext.Provider>
    </main>
  );
};

export default App;
