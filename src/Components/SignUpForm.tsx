import * as React from 'react';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ButtonGroup, Icon, IconButton, Input, InputAdornment, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from "@mui/material/styles";
import styled from "@emotion/styled";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { myTheme } from '../myTheme';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginForm() {
//   const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
const navigate = useNavigate();
const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <TextField
                autoComplete="given-name"
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                variant="standard"
                className="text"
                color="warning"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                variant="standard"
                className="text"
                color="warning"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                variant="standard"
                color="warning"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      fullWidth
                      color="warning"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility color="warning"/> : <VisibilityOff color="warning"/>}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>

          <Button
                    type="submit"
                    fullWidth
                    disableElevation
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textDecoration:'none'}}
                    className='login-btn'
                    onClick={()=>{navigate('/dashboard') }}
                    title='signup-button'
                >
                    Sign Up <SendIcon sx={{ ml: 2 }}/>
                </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography variant='body2' className='sign-in'>
                Already have an account?
                <Link href="#" variant="body2" title='Lets sign-in' > 
                  Sign in
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
