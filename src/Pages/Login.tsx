import { Box, Button, Container, Grid, Link, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { girl, logo } from "../Assets/Images";
import BasicTabs from "../Components/BasicTabs";
import LoginForm from "../Components/LoginForm";

export default function Login() {
  return (
    <>
      <Container maxWidth="lg">
        <Box className="logo">
          <Grid>
            <img src={logo} alt="" />
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg" className="login-main">
        <Grid container justifyContent="space-between">
          <Grid item className="login-box">
            <BasicTabs />
          </Grid>
          <Grid item>
            <img src={girl} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
