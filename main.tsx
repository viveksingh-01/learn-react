import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./src/components/App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

