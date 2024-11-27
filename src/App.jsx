import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import DataSource from "./pages/DataSource";
import ABP from "./pages/ABP";
import InvestigatorPanel from "./pages/InvestigatorPanel";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "16px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/data-source" element={<DataSource />} />
            <Route path="/abp" element={<ABP />} />
            <Route path="/investigator-panel" element={<InvestigatorPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;