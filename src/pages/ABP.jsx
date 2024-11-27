import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";

const ABP = () => {
  return (
    <Box>
      <Header title="ABP" subtitle="Analyze behavior patterns" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        ABP content goes here.
      </Box>
    </Box>
  );
};

export default ABP;