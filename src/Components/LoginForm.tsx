import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>
      <Typography component="h3" variant="h5" className="login-head">
        Log In into your account
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} marginTop={2}>
        <Grid container>
          <Grid item lg={12} >
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label="First Name"
              variant="standard"
              color="warning"
              autoFocus
            />
          </Grid>

          <Grid item lg={12} className="text">
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="standard"
              color="warning"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          disableElevation
          variant="contained"
          sx={{ mt: 3, mb: 2, textDecoration: "none" }}
          className="login-btn"
          onClick={() => {navigate("/dashboard");}}
        >
          LOG IN
        </Button>

        <Grid container justifyContent="flex-start" className="fp" >
          <Grid item>
            <Link href="#" variant="body2">
              Forget Password?
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </div>
  );
}
