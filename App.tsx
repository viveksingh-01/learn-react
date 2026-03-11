import React, { createContext } from "react";
import ParentComponent from "./src/Hooks/useCallback/ParentComponent";

const userName = "Mike";
export const UserContext = createContext("");
export const ThemeContext = createContext<"light" | "dark">("light");

const App = () => {
  return (
    <main>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}

      {/* <UserContext.Provider value={userName}>
        <ThemeContext.Provider value={"dark"}>
          <ComponentC />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      <ParentComponent />
    </main>
  );
};

export default App;
