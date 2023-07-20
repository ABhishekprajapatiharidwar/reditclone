import { Height } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import WifiOffIcon from "@mui/icons-material/WifiOff";

const styleofonline = {
  position: "absolute",
  zIndex: "3000",
  margin: "10px",
  backgroundColor: "#ff41a3",
  borderRadius: "5px",
  color: "white",
};

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={styleofonline}>
      {isOnline ? (
        <span></span>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <WifiOffIcon
              style={{ color: "white", fontSize: "30px", marginRight: "4px" }}
            />
            <div>
              <span>Currently You are offline:</span>
              <p>
                Please connect to the internet for full access to all features.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OnlineStatus;
