import { ThemeProvider } from "@emotion/react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Box,Button,Link,SelectChangeEvent,ToggleButton,ToggleButtonGroup} from "@mui/material";
import React, { useState } from "react";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { useNavigate } from "react-router-dom";
import { arrow, brandlogo, notification, profile, searchicon } from "../Assets/Images";
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
  const [search,setSearch] =React.useState(true)
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
          <Box className="leftnavbar">
            <Link href="/" title="brand-logo"> <img src={brandlogo} alt="" className="brand" /></Link>
            <ToggleButtonGroup
              value={alignment}
              className="toggle-btn"
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              title="Toggle-button" 
            >
              <ToggleButton value="left" aria-label="left aligned" onClick={toggle}>
                <FormatAlignLeftIcon  color="warning" />
              </ToggleButton>
            </ToggleButtonGroup>
            
            <div className="search-input">
              <input type="search" className="form-control "  placeholder="Search" ></input>
            </div>
            <Button title="close-searchbar" onClick={searchbar} className="btn-close-search btn-close"><CloseRoundedIcon color="warning"/></Button> 

          </Box>

          <Box className="rightnavbar">
            <Button title="search-button" className="search-btn bell menu" onClick={searchbar}>
              <img src={searchicon} alt="search-icon" />
            </Button>
            <Dropdown img={notification} name="" arrow="" classname="menu bell" title='notification-button'/>

            <Dropdown img={profile} name="John Doe" arrow={arrow} classname="menu " title='profile-menu'/>
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}
