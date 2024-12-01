import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";

const ReportSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Report Section" subtitle="Manage your reports" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" fontWeight="bold">Report List</Typography>
          {/* Add a table or list here */}
        </Box>
      </Box>
    </Box>
  );
};

export default ReportSection;
