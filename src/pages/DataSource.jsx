import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";

const DataSource = () => {
  return (
    <Box>
      <Header title="Data Source" subtitle="View and manage data sources" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        Data Source content goes here.
      </Box>
    </Box>
  );
};

export default DataSource;