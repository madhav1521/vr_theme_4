import { ThemeProvider } from "@emotion/react";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { arrow, notification, profile, search } from "../Assets/Images";
import { dashTheme } from "../dashTheme";
import Dropdown from "./Dropdown";

export default function Header() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
    <ThemeProvider theme={dashTheme}>
      <div className="header">
        <Box className="searchbar">
          <TextField
            type="search"
            id="standard-basic"
            label="Search"
            name="search"
            fullWidth
            color="warning"
            variant="standard"
            className="search-input"
          ></TextField>
        </Box>

        <Box className="rightnav">
          <Dropdown img={notification} name="" arrow="" />

          <Dropdown img={profile} name="John Doe" arrow={arrow} />
        </Box>
      </div>
      </ThemeProvider>
    </>
  );
}
