import React from "react";
import { UserContext } from "../../../App";

const ComponentF = () => {
  return (
    <div>
      <h3>This is Component F</h3>

      <UserContext.Consumer>
        {(name) => {
          return <p>Using Context API - Logged-in user: {name}</p>;
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;

// As per the requirement, we need to display the logged-in user's name in ComponentF
// which is nested like - App > ComponentC > ComponentE > ComponentF
// as evident, we need to pass the userName from App component to ComponentF via props
// which requires us to pass the props down manually at every level.
// This is where Context-API can help us make this easier.

// Using Context.Consumer, we consume the username as provided from the App component
// This helps us avoid the hassle of manual props-drilling.
