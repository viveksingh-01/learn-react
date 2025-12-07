import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement
const heading = React.createElement("h1", {}, "Hello world - a message from React!");

// Using JSX
const headingWithJSX = <h1>Hello world - made using JSX!</h1>;

// Basic component in React
const HelloWorldComponent = () => <h1>Hello world, from React Component!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering React element
// root.render(headingWithJSX);

// Rendering React component
root.render(<HelloWorldComponent />);
