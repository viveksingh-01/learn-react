import React, { createContext } from "react";
import FocusInput from "./src/Hooks/useRef/FocusInput";

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

      {/* <Counter /> */}

      <FocusInput />
    </main>
  );
};

export default App;
