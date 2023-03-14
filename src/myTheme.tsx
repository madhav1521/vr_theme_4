import { createTheme } from "@mui/material";
import { yellow, purple, green } from "@mui/material/colors";
import Box from '@mui/material/Box';
import pink from "@mui/material/colors/pink";
// import TextField from "@mui/material/TextField";
// import InputBase from "@mui/material/InputBase";
// import FilledInput from "@mui/material/FilledInput";

export const myTheme = createTheme({
  components: {

    MuiInput: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(178,178,178,0.6)",
          color: "white",
          padding:"1px 0 6px 0",
          lineHeight:"20px",
          marginTop:"9px",
          fontSize: "15px",
          fontWeight: "400",
          ":before":{
            borderBottom:"0",
          },
          ":hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "0 ",
          },
          ":after":{
            borderBottom: "0 ",
          }
          
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    // MuiBox: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //     },
    //   },
    // },
    
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#b2b2b2",
          textDecoration: "none",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "rgba(179,179,179,1)",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          // paddingBottom:"6px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "White",
          padding: "0",
          marginRight:"30px",
          opacity: 0.5,
          fontWeight:"600",
          fontSize:"16px",
          minWidth:"0",
          minHeight:"55px",
          
        },
      },
    },
  },

  palette: {
    warning: {
      main: "#b3b3b3",
    },
    primary:{
      main:"#A555FF"
    }
  },

  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});
