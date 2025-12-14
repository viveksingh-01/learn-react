import { useState } from "react";

function useNetworkStatus() {
  const [status, setStatus] = useState(true);

  window.addEventListener("online", () => {
    setStatus(true);
  });
  window.addEventListener("offline", () => {
    setStatus(false);
  });

  return status;
}

export default useNetworkStatus;
