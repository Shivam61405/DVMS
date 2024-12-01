import React from "react";
import Header from "../components/Header";
import { Box, Typography, TextField, Grid, Button, Avatar } from "@mui/material";

const AthleteProfile2 = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Athlete Profile" subtitle="Manage your athlete's profile" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>Athlete Profile</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar
                  alt="Profile of the athlete"
                  src="https://placehold.co/100x100"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Athlete ID"
                      value="AID#45"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Athlete Name"
                      value="Ritika"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="State"
                      value="Haryana"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      value="RiD@gmail.com"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Date of Birth"
                      value="25 January 2000"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Present Address"
                      value="Plot No.123 , Sector - 10A"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Permanent Address"
                      value="House No.231,456,DLF COLONY"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="City"
                      value="Gurgram"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Debut Date"
                      value="23 Feb, 2009"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Pin Code"
                      value="123-234-009"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button variant="contained" color="primary">More</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AthleteProfile2;