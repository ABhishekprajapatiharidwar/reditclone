import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Popular from "./popular";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

export default Routing;
