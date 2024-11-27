import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  const linkStyle = {
    display: "block",
    padding: "12px 16px",
    margin: "4px 0",
    textDecoration: "none",
    color: "black",
    borderRadius: "8px",
  };

  const activeLinkStyle = {
    backgroundColor: "#ddd",
  };

  return (
    <Box sx={{ width: 250, padding: 2, backgroundColor: "#f5f5f5", height: "100vh" }}>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        DVMS
      </Typography>
      <NavLink to="/" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}>
        Dashboard
      </NavLink>
      <NavLink to="/cases" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}>
        Cases
      </NavLink>
      <NavLink to="/data-source" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}>
        Data Source
      </NavLink>
      <NavLink to="/abp" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}>
        ABP
      </NavLink>
      <NavLink to="/investigator-panel" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}>
        Investigator Panel
      </NavLink>
    </Box>
  );
};

export default Sidebar;