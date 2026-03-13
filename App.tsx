import React, { createContext } from "react";
import Timer from "./src/Hooks/useRef/Timer";

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

      {/* <FocusInput /> */}

      <Timer />
    </main>
  );
};

export default App;
