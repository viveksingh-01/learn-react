import React, { createContext } from "react";
import Counter from "./src/Hooks/useMemo/Counter";

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

      {/* <ParentComponent /> */}

      <Counter />
    </main>
  );
};

export default App;
