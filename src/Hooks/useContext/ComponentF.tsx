import React from "react";

type ComponentFProps = {
  name: string;
};

const ComponentF = ({ name }: ComponentFProps) => {
  return (
    <div>
      <h3>This is Component F</h3>
      <p>Logged-in user: {name}</p>
    </div>
  );
};

export default ComponentF;

// As per the requirement, we need to display the logged-in user's name in ComponentF
// which is nested like - App > ComponentC > ComponentE > ComponentF
// as evident, we need to pass the userName from App component to ComponentF via props
// which requires us to pass the props down manually at every level.
// This is where Context-API can help us make this easier.
