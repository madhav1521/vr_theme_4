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
import { error, info, searchicon, upload, valid, warning } from "../Assets/Images";
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
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");
  const [age4, setAge4] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge1(event.target.value as string);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setAge2(event.target.value as string);
  };
  const handleChange3 = (event: SelectChangeEvent) => {
    setAge3(event.target.value as string);
  };
  const handleChange4 = (event: SelectChangeEvent) => {
    setAge4(event.target.value as string);
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
        <Box className="main-container">
          <Box className="leftsection ">
            <Sidebar />
          </Box>
          <Box className="rightsection ">
            <Header />
            <Box className="main-content">
              <Grid container>
                <Typography component="h2" variant="h3" className="page-title">
                  Users
                </Typography>
              </Grid>
              <Card className="card users-page">
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
                          value={age1}
                          onChange={handleChange1}
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
                      color="warning"
                      variant="standard"
                      className="textarea"
                      id="standard-multiline-static"
                      multiline
                      rows={3}
                    />

                  </Grid>
                </Grid>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Two Column
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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

                  <Grid item xs={12} sm={6}>

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

                  <Grid item xs={12} sm={6}>
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

                  <Grid item xs={12} sm={6}>
                    <Box>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age2}
                          onChange={handleChange2}
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
                      <FormControl disabled fullWidth variant="standard" className="disable-textfield">
                        <InputLabel htmlFor="component-disabled">Disabled</InputLabel>
                        <Input id="component-disabled" defaultValue="Disable" color="warning" />
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
                          value={age3}
                          onChange={handleChange3}
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
                      noValidate
                      autoComplete="off"
                    >
                      <FormControl disabled fullWidth variant="standard">
                        <InputLabel htmlFor="component-disabled">Disabled</InputLabel>
                        <Input id="component-disabled" defaultValue="Disabled" />
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
                          value={age4}
                          onChange={handleChange4}
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

                <Stack direction="row" alignItems="center" spacing={2} className="upload-content">
                  <Button variant="outlined" component="label" className="upload-btn" title="Upload-files" >
                    <img src={upload} alt="" /> &nbsp; Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <Typography component="h4" variant="h6" className=" nis">
                    No item Selected
                  </Typography>
                </Stack>
                <Typography component="h4" variant="h5" className="card-head">
                  Radio Button
                </Typography>


                <Grid item xs={12} >
                  <FormControl className="radio-check">
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      defaultValue="option1"
                    >
                      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                    </RadioGroup>
                  </FormControl>
                </Grid>


                <Typography component="h4" variant="h5" className="card-head">
                  Check Box
                </Typography>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox color="primary" />
                    }
                    label="Option 1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox color="primary" />
                    }
                    label="Option 2"
                  />
                </Grid>

                <Box className="validation-notes">
                  <Box className="text-message text-danger">
                    <img src={error} alt="" /> This is an error Message
                  </Box>
                  <Box className="text-message text-warn">
                    <img src={warning} alt="" /> This is a warning message!
                  </Box>
                  <Box className="text-message text-info">
                    <img src={info} alt="" /> This is an information message!
                  </Box>
                  <Box className="text-message text-success">
                    <img src={valid} alt="" /> This is an Success message!
                  </Box>
                </Box>
                <Typography component="h4" variant="h5" className="inner-heading">
                  Call to Action
                </Typography>
                <Button
                  type="submit"
                  title="Primary-button"
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

                <Button sx={{ ml: 5, textDecoration: "none", padding: "12px 30px" }} title="Secondary-button" variant="outlined" onClick={handleClickOpen}>
                  Secondary
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    {"Do you Want to click me?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText color="white">
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
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
