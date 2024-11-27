import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Header title="Dashboard" subtitle="Welcome to the Dashboard" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        {/* Dashboard sections */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" fontWeight="bold">Statistics</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1, backgroundColor: "#f5f5f5", padding: 2, borderRadius: 1 }}>
              Total Cases
            </Box>
            <Box sx={{ flex: 1, backgroundColor: "#f5f5f5", padding: 2, borderRadius: 1 }}>
              Active Investigations
            </Box>
            <Box sx={{ flex: 1, backgroundColor: "#f5f5f5", padding: 2, borderRadius: 1 }}>
              Resolved Cases
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;