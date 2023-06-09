import { createTheme } from "@mui/material";
import { background } from "./Assets/Images";

export const dashTheme = createTheme({
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
    components:{
        MuiFormControlLabel: {
        styleOverrides: {
          root: {
            // paddingBottom:"6px",
            color:"rgba(179,179,179,1)"
          },
        },
      },
      MuiTextField:{
        styleOverrides:{
          root:{
            backgroundColor:"transparent",
           
            paddingLeft:"32px", 
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: "rgba(179,179,179,1)",
            paddingLeft:"32px",
            
          },
        },
      },
      
      MuiGrid: {
        styleOverrides: {
          root: {
            width:"100%",
            // flexDirection:"column",
          },
        },
      },
      MuiInputBase:{
        styleOverrides:{
            root:{
                marginTop:"0",
            },
        },
      },
      MuiInputLabel:{
        styleOverrides:{
            root:{
               
            },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            color:"white!important",
            backgroundColor:"#0F1E4E",
            // boxShadow: "0px 0px 19px rgba(0, 0, 0, 0.17)",
            padding:"20px",
            gap:"10px"
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            // backgroundColor:"#0F1E4E",
            color:"white",
            // boxShadow: "0px 0px 19px rgba(0, 0, 0, 0.17)",
            padding:"20px",
            gap:"10px"
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            borderBottom: "0",
            color: "white",
            
            
            lineHeight:"20px",
            
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
            },
          },
        },
      },
    },
    
});