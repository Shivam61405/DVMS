import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";

const InvestigatorPanel = () => {
  return (
    <Box>
      <Header title="Investigator Panel" subtitle="Access investigator tools" />
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
        Investigator Panel content goes here.
      </Box>
    </Box>
  );
};

export default InvestigatorPanel;