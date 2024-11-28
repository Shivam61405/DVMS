import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import DVMSIcon from '../DVMS.png'; // Correct relative path
import DashboardIcon from '../Dashboard.png'; // Correct relative path
import CasesIcon from '../Cases.png'; // Correct relative path
import DataSourceIcon from '../Datasource.png'; // Correct relative path
import ABPIcon from '../Reports.png'; // Correct relative path
import InvestigatorPanelIcon from '../Investigation.png'; // Correct relative path

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 200, // Fixed width for the sidebar
        padding: 2,
        backgroundColor: "#FFFFFF",
        height: "100vh", // Full height of the viewport
        position: 'fixed', // Fixed position
        top: 0,
        left: 0,
        zIndex: 1000, // Ensure it stays on top
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold", color: "#007bff" }}>
        <img src={DVMSIcon} alt="DVMS Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        DVMS
      </Typography>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={DashboardIcon} alt="Dashboard Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Dashboard
      </NavLink>
      <NavLink 
        to="/cases" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={CasesIcon} alt="Cases Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Cases
      </NavLink>
      <NavLink 
        to="/data-source" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={DataSourceIcon} alt="Data Source Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Data Source
      </NavLink>
      <NavLink 
        to="/athlete-profile" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={CasesIcon} alt="Athlete-Profile Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        AthleteProfile
      </NavLink>
      <NavLink 
        to="/abp" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={ABPIcon} alt="ABP Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        ABP
      </NavLink>
      <NavLink 
        to="/investigator-panel" 
        style={({ isActive }) => ({ 
          display: "block", 
          padding: "12px 16px", 
          textDecoration: "none", 
          color: isActive ? "#007bff" : "black" 
        })}
      >
        <img src={InvestigatorPanelIcon} alt="Investigator Panel Icon" style={{ marginRight: 8, width: 24, height: 24 }} />
        Investigator Panel
      </NavLink>
    </Box>
  );
};

export default Sidebar;
