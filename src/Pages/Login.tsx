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
    <Box className="login">
      <Container maxWidth="lg" className="login-page">
            <img src={logo} alt="brand-logo" className="logo" />
          <Grid container minWidth="xl" justifyContent="space-between" flexWrap="nowrap" alignItems="center" className="login-main" >
            <Grid item className="login-box">
              <BasicTabs classname="loginclass" label1="Login" label2="Sign Up" panel1={<LoginForm />} panel2={<SignUpForm />} />
            </Grid>
            <Grid item>
              <img src={girl} alt="" className="login-img" />
            </Grid>
          </Grid>
          <Typography component="h5" variant="body1" color="white" className="copyright">
            © 2021 Dummy Company. All rights reserved.
          </Typography>
      </Container>
    </Box>
    </ThemeProvider>
  );
}
