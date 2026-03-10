import React from "react";
import ComponentF from "./ComponentF";

type ComponentEProps = {
  name: string;
};

const ComponentE = ({ name }: ComponentEProps) => {
  return (
    <div>
      <h2>This is Component E</h2>
      <ComponentF name={name} />
    </div>
  );
};

export default ComponentE;
