import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/admin";
import Farmer from "./pages/farmer";
import Dashboard1 from "./Components/Admin/Dashboard";
import Header from "./Components/Header";
import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard1 />} />
        <Route path="/farmer" element={<Farmer />} />
      </Routes>
    </>
  );
}

export default App;
