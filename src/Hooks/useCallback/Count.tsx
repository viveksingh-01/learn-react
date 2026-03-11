import React from "react";

type CountProps = {
  text: string;
  count: number;
};

const Count = ({ text, count }: CountProps) => {
  console.log("Rendering Count - ", text);

  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default Count;
