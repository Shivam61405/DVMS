import { Typography, Box } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography variant="h2" color="secondary" fontWeight="bold" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h5" color="textSecondary">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;