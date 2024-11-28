import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import CaseList from "./pages/CaseList";
import AthleteProfile from "./pages/AthleteProfile";

import DataSource from "./pages/DataSource";
import ABP from "./pages/ABP";
import InvestigatorPanel from "./pages/InvestigatorPanel";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ 
          flex: 1, 
          padding: "16px", 
          marginLeft: "250px", 
          overflow: 'auto', 
          backgroundColor: "#f0f2f5" // Set the same background color as Dashboard
        }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/data-source" element={<DataSource />} />
            <Route path="/abp" element={<ABP />} />
            <Route path="/athlete-profile" element={<AthleteProfile />} />
            <Route path="/caselist" element={<CaseList />} />
            <Route path="/investigator-panel" element={<InvestigatorPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;