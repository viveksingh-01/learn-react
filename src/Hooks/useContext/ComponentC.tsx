import React from "react";
import ComponentE from "./ComponentE";

type ComponentCProps = {
  name: string;
};

const ComponentC = ({ name }: ComponentCProps) => {
  return (
    <div>
      <h1>This is Component C</h1>
      <ComponentE name={name} />
    </div>
  );
};

export default ComponentC;
