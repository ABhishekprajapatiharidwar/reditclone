import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Popular from "./popular";
import Working from "./Working";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/popular" element={<Popular />}/>
        <Route path="/working" element={<Working/>}/>
      </Routes>
    </div>
  );
};

export default Routing;
