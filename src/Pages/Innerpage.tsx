import { ThemeProvider } from "@emotion/react";
import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { error, info, valid, warning } from "../Assets/Images";
import BasicTabs from "../Components/BasicTabs";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { dashTheme } from "../dashTheme";
import { myTheme } from "../myTheme";

export default function Innerpage() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
        <div className="main-container">
          <div className="leftsection ">
            <Sidebar />
          </div>
          <div className="rightsection ">
            <Header />
            <div className="main-content">
              <Grid container>
                <Typography component="h2" variant="h3" className="page-title">Users</Typography>
              </Grid>
              <Card className="card">
                <Typography component="h4" variant="h5" className="inner-heading">One Column</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="given-name"
                      name="Name"
                      fullWidth
                      id="Name"
                      label="Name"
                      variant="standard"
                      className="text"
                      color="warning"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Country"
                          onChange={handleChange}
                          fullWidth
                          variant="standard"
                          autoComplete="select"
                          color="warning"
                          className='login-select'
                        >
                          <MenuItem value={10}>India</MenuItem>
                          <MenuItem value={30}>Africa</MenuItem>
                          <MenuItem value={20}>America</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="textarea"
                      label="textarea"
                      type="textarea"
                      id="textarea"
                      color="warning"
                      variant="standard"
                    />
                  </Grid>
                </Grid>

                <Typography component="h4" variant="h5" className="inner-heading">Two Column</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} >
                    <TextField
                      autoComplete="name"
                      name="Name"
                      fullWidth
                      id="Name"
                      label=" Name"
                      variant="standard"
                      className="text"
                      color="warning"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      color="warning"
                      variant="standard"
                      autoComplete="new-password"
                    />
                  </Grid>

                  <Grid item xs={6}>
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

                  <Grid item xs={6}>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Country"
                          onChange={handleChange}
                          fullWidth
                          variant="standard"
                          autoComplete="select"
                          color="warning"
                          className='login-select'
                        >
                          <MenuItem value={10}>India</MenuItem>
                          <MenuItem value={20}>Africa</MenuItem>
                          <MenuItem value={30}>America</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>

                <Typography component="h4" variant="h5" className="inner-heading">Three Column</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4} >
                    <TextField
                      autoComplete="given-name"
                      name="Focus"
                      fullWidth
                      id="focus"
                      label="Focus"
                      variant="standard"
                      className="text"
                      color="warning"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={4}  >
                    <TextField
                      fullWidth
                      id="disable"
                      label="Disabled"
                      name="Disable"
                      value="Disable"
                      variant="standard"
                      className="text"
                      disabled
                      color="warning"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Error"
                      name="email"
                      value="jhondoe@gmail"
                      variant="standard"
                      color="warning"
                      autoComplete="email"
                    />
                  </Grid>
                </Grid>

                <Typography component="h4" variant="h5" className="inner-heading">Four Column</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={3} >
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      fullWidth
                      id="name"
                      label="Name"
                      variant="standard"
                      className="text"
                      color="warning"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Dropdown</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Dropdown"
                          onChange={handleChange}
                          fullWidth
                          variant="standard"
                          autoComplete="select"
                          color="warning"
                          className='login-select'
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={3}  >
                    <TextField
                      fullWidth
                      id="disable"
                      label="Disabled"
                      name="Disable"
                      value="Disable"
                      variant="standard"
                      className="text"
                      disabled
                      color="warning"
                      autoComplete="family-name"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Country"
                          onChange={handleChange}
                          fullWidth
                          variant="standard"
                          autoComplete="select"
                          color="warning"
                          className='login-select'
                        >
                          <MenuItem value={10}>India</MenuItem>
                          <MenuItem value={20}>Africa</MenuItem>
                          <MenuItem value={30}>America</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>

                <Typography component="h4" variant="h5" className="inner-heading">Other Design Elements</Typography>
                <Typography component="h4" variant="h5" className="card-head">File Upload</Typography>

// upload button

                <Typography component="h4" variant="h5" className="card-head">Radio Button</Typography>
                <Grid item xs={12}>
                  <FormControlLabel control={<Radio value="allowExtraEmails" color="primary" />}
                    label="Option 1"
                  />
                  <FormControlLabel control={<Radio value="allowExtraEmails" color="primary" />}
                    label="Option 2"
                  />
                </Grid>

                <Typography component="h4" variant="h5" className="card-head">Check Box</Typography>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Option 1"
                  />
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Option 2"
                  />
                </Grid>


                <div className="validation-notes">
                  <div className="text-message text-danger"><img src={error} alt="" /> This is an error Message</div>
                  <div className="text-message text-warn"><img src={warning} alt="" /> This is a warning message!</div>
                  <div className="text-message text-info"><img src={info} alt="" /> This is an information message!</div>
                  <div className="text-message text-success"><img src={valid} alt="" /> This is an Success message!</div>
                </div>

                <Typography component="h4" variant="h5" className="inner-heading">Call to Action</Typography>

                <Button
                  type="submit"

                  disableElevation
                  variant="contained"
                  sx={{ mt: 3, mb: 2, textDecoration: "none" }}
                  className="login-btn"
                  onClick={() => { navigate("/dashboard"); }}
                >
                  Primary
                </Button>

// secondary button

                <Typography component="h4" variant="h5" className="inner-heading">Tabs</Typography>
                <BasicTabs label1="Tab 1" label2="Tab 2" label3="Tab 3" 
                panel1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." 
                panel2="2, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." 
                panel3="3, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." 
                />
              </Card>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
