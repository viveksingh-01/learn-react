import React from "react";
import { ThemeContext, UserContext } from "../../../App";

const ComponentF = () => {
  return (
    <div>
      <h3>This is Component F</h3>

      <UserContext.Consumer>
        {(name) => {
          return (
            <ThemeContext.Consumer>
              {(theme) => {
                return (
                  <div>
                    Using Context API
                    <p>Logged-in user: {name}</p>
                    <p>Theme preference: {theme}</p>
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;

// NOTES:
// Though Context API makes our lives easier, but as we can see, using the
// traditional Context API approach, our consumer code becomes little messy
// useContext hook helps us consume the context in a cleaner and simpler way.

// ----------------------------------------------------------------------------------

// OLDER NOTES:
// As per the requirement, we need to display the logged-in user's name in ComponentF
// which is nested like - App > ComponentC > ComponentE > ComponentF
// as evident, we need to pass the userName from App component to ComponentF via props
// which requires us to pass the props down manually at every level.
// This is where Context-API can help us make this easier.

// Using Context.Consumer, we consume the username as provided from the App component
// This helps us avoid the hassle of manual props-drilling.
