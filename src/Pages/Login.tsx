import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { girl, logo } from "../Assets/Images";
import BasicTabs from "../Components/BasicTabs";
import { ThemeProvider } from "@emotion/react";
import { myTheme } from "../myTheme";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

export default function Login() {
  return (
    <ThemeProvider theme={myTheme}>
    <div className="login">
      <Container className="login-page">
        <Container maxWidth="lg">
          <Box className="logo">
            <img src={logo} alt="" />
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
              <BasicTabs classname="loginclass" label1="Login" label2="Sign Up" panel1={<LoginForm />} panel2={<SignUpForm />} />
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
      </Container>
    </div>
    </ThemeProvider>
  );
}
