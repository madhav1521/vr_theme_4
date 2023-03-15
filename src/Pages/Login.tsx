import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { girl, logo } from "../Assets/Images";
import BasicTabs from "../Components/BasicTabs";

export default function Login() {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <img src={logo} alt="" className="logo" />
        </Box>
      </Container>
      <Container maxWidth="lg" className="login-container">
        <Grid
          container
          minWidth="xl"
          justifyContent="space-between"
          flexWrap="nowrap"
          alignItems="center"
          className="login-main"
        >
          <Grid item className="login-box">
            <BasicTabs />
          </Grid>
          <Grid item>
            <img src={girl} alt="" className="login-img" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className="copyright">
        <Typography component="h5" variant="body1" color="white">
          © 2021 Dummy Company. All rights reserved.
        </Typography>
      </Container>
    </>
  );
}
