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
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { useNavigate } from "react-router-dom";
import { arrow, brandlogo, notification, profile, search } from "../Assets/Images";
import { dashTheme } from "../dashTheme";
import Dropdown from "./Dropdown";

export default function Header() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [alignment, setAlignment] = React.useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  const [status, setStatus] = React.useState(true)
  const [search,setSearch] =useState()
    function toggle (){
      document.body.classList.toggle('setStatus')
    }
   

    function searchbar(){
      document.body.classList.toggle('setSearch')
    }

  return (
    <>
      <ThemeProvider theme={dashTheme}>
      <div className='overlay' onClick={toggle}></div>
        <div className="header">
          <Box className="leftnav">
            <img src={brandlogo} alt="" className="brand" />
            <ToggleButtonGroup
              value={alignment}
              className="toggle-btn"
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned" onClick={toggle}>
                <FormatAlignLeftIcon  color="warning" />
              </ToggleButton>
            </ToggleButtonGroup>
            
            <div className="search-input">
              <input type="search" className="form-control"  placeholder="Search" ></input>
            </div>
            <Button className="search-btn" onClick={searchbar}>
              <img src={search} alt="search-icon" />
            </Button>
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
