import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";

const Cases = () => {
  return (
    <Box>
      <Header title="Cases" subtitle="Manage your cases" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" fontWeight="bold">Case List</Typography>
          {/* Add a table or list here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Cases;