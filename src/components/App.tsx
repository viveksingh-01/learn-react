import React from "react";
import useNetworkStatus from "./Custom Hook/useNetworkStatus";

export default function App() {
  const networkStatus = useNetworkStatus();
  if (!networkStatus) {
    return (
      <section>
        <h2>Oops, no internet connectivity...</h2>
        <p>Please check your internet connection.</p>
      </section>
    );
  }

  return <h1>Hello, let's learn React!</h1>;
}
