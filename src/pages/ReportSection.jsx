import React from "react";
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const ReportSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1, maxWidth: 800, margin: "auto" }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>Report Section</Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Typography variant="h6" fontWeight="medium" color="primary" pb={1}>Report</Typography>
        </Box>
        <Typography mb={2}>Welcome to DVMS Whistleblower Portal. Report any concern Securely and anonymously.</Typography>
        <Box component="form">
          <Box mb={2}>
            <Typography variant="body1" mb={1}>Category</Typography>
            <TextField fullWidth variant="outlined" />
          </Box>
          <Box mb={2}>
            <Typography variant="body1" mb={1}>Description</Typography>
            <TextField fullWidth variant="outlined" multiline rows={4} />
          </Box>
          <Box mb={2}>
            <Typography variant="body1" mb={1}>Upload files</Typography>
            <Button variant="contained" component="label" sx={{ backgroundColor: "#e0e0e0", color: "#000" }}>
              Choose File
              <input type="file" hidden />
            </Button>
            <Typography variant="body2" color="textSecondary" mt={1}>Supported file types: jpg, png, pdf</Typography>
          </Box>
          <Box mb={2} display="flex" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Submit Anonymously" />
            <FormControlLabel control={<Checkbox />} label="Add details" />
          </Box>
          <Button variant="contained" color="primary" fullWidth>Submit Report</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportSection;