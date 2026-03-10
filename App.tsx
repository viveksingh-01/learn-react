import React, { createContext } from "react";
import ComponentC from "./src/Hooks/useContext/ComponentC";

const userName = "Mike";
export const UserContext = createContext("");
export const ThemeContext = createContext<"light" | "dark">("light");

const App = () => {
  return (
    <main>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}

      <UserContext.Provider value={userName}>
        <ThemeContext.Provider value={"dark"}>
          <ComponentC />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </main>
  );
};

export default App;
