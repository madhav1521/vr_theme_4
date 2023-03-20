import { ThemeProvider } from "@emotion/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,

} from "@mui/material";
// import useTheme from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { error, info, upload, valid, warning } from "../Assets/Images";
import BasicTabs from "../Components/BasicTabs";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { dashTheme } from "../dashTheme";
import { innerTheme } from "../innerTheme";
import { myTheme } from "../myTheme";

export default function Innerpage() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ariaLabel = { 'aria-label': 'description' };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
      <ThemeProvider theme={innerTheme}>
        <div className="main-container">
          <div className="leftsection ">
            <Sidebar />
          </div>
          <div className="rightsection ">
            <Header />
            <div className="main-content">
              <Grid container>
                <Typography component="h2" variant="h3" className="page-title">
                  Users
                </Typography>
              </Grid>
              <Card className="card">
                <Typography component="h4" variant="h5" className="inner-heading" marginBottom="28px">
                  One Column
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
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
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Country"
                          fullWidth
                          color="warning"
                          className="login-select"
                        >
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value={10}>America</MenuItem>
                          <MenuItem value={20}>Africa</MenuItem>
                          <MenuItem value={30}>China</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="textarea"
                      label="Text area"
                      type="textarea"
                      id="textarea"
                      color="warning"
                      variant="standard"
                    />
                  
                  </Grid>
                </Grid>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Two Column
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
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

                    <FormControl fullWidth variant="standard">
                      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="standard-adornment-password"

                        color="warning"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <VisibilityOff color="warning" /> : <Visibility color="warning" />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        error
                        fullWidth
                        id="standard-error-helper-text"
                        label="Error"
                        defaultValue="jhondoe@gmail"
                        helperText="Enter Valid Email ID"
                        variant="standard"
                        color="warning"
                        autoComplete="email"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Country"
                          fullWidth
                          color="warning"
                          className="login-select"
                        >
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value={10}>America</MenuItem>
                          <MenuItem value={20}>Africa</MenuItem>
                          <MenuItem value={30}>China</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Three Column
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
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
                  <Grid item xs={12} sm={4}>
                    <Box
                      component="form"
                      
                      noValidate
                      autoComplete="off"
                    >
                      <FormControl disabled fullWidth  variant="standard">
                        <InputLabel  htmlFor="component-disabled">Disabled</InputLabel>
                        <Input id="component-disabled" defaultValue="Composed TextField" />
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        error
                        fullWidth
                        id="standard-error-helper-text"
                        label="Error"
                        defaultValue="jhondoe@gmail"
                        helperText="Enter Valid Email ID"
                        variant="standard"
                        color="warning"
                        autoComplete="email"
                      />
                    </Box>


                  </Grid>
                </Grid>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Four Column
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={3}>
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
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Dropdown</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Country"
                          fullWidth
                          color="warning"
                          className="login-select"
                        >
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value={10}>America</MenuItem>
                          <MenuItem value={20}>Africa</MenuItem>
                          <MenuItem value={30}>China</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box
                      component="form"
                      // sx={{
                      //   // '& > :not(style)': { m: 1 },
                      //   borderBottom: "1px dashed rgba(178,178,178,0.6)",
                      // }}
                      noValidate
                      autoComplete="off"
                    >
                      <FormControl disabled fullWidth variant="standard">
                        <InputLabel  htmlFor="component-disabled">Disabled</InputLabel>
                        <Input  id="component-disabled" defaultValue="Disabled" />
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                          label="Country"
                          fullWidth
                          color="warning"
                          className="login-select"
                        >
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value={10}>America</MenuItem>
                          <MenuItem value={20}>Africa</MenuItem>
                          <MenuItem value={30}>China</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Other Design Elements
                </Typography>
                <Typography component="h4" variant="h5" className="card-head">
                  File Upload
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="outlined" component="label" className="upload-btn" >
                    <img src={upload} alt="" /> &nbsp; Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                  </IconButton>
                </Stack>
                <Typography component="h4" variant="h5" className="card-head">
                  Radio Button
                </Typography>


                <Grid item xs={12} marginBottom="40px">
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Option 1" className="radio-check"/>
                      <FormControlLabel value="male" control={<Radio />} label="OPtion 2" className="radio-check"/>
                    </RadioGroup>
                  </FormControl>
                </Grid>


                <Typography component="h4" variant="h5" className="card-head">
                  Check Box
                </Typography>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox color="primary"/>
                    } className="radio-check"
                    label="Option 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox color="primary"/>
                    } className="radio-check"
                    label="Option 2"
                  />
                </Grid>

                <div className="validation-notes">
                  <div className="text-message text-danger">
                    <img src={error} alt="" /> This is an error Message
                  </div>
                  <div className="text-message text-warn">
                    <img src={warning} alt="" /> This is a warning message!
                  </div>
                  <div className="text-message text-info">
                    <img src={info} alt="" /> This is an information message!
                  </div>
                  <div className="text-message text-success">
                    <img src={valid} alt="" /> This is an Success message!
                  </div>
                </div>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Call to Action
                </Typography>
                <Button
                  type="submit"
                  disableElevation
                  variant="contained"
                  sx={{ textDecoration: "none", border: 0, padding: "12px 30px" }}
                  className="primary-btn"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  Primary
                </Button>

                <Button sx={{ ml: 5, textDecoration: "none", padding: "12px 30px" }} variant="outlined" onClick={handleClickOpen}>
                  Secondary
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    {"Do you Want to click me?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Secondary button clicked!!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      No
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>

                <Typography component="h4" variant="h5" className="inner-heading">
                  Tabs
                </Typography>

                <BasicTabs
                  classname="innertab"
                  label1="Tab 1"
                  label2="Tab 2"
                  label3="Tab 3"
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
