import { createTheme } from "@mui/material";
import { yellow, purple, green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import pink from "@mui/material/colors/pink";
// import TextField from "@mui/material/TextField";
// import InputBase from "@mui/material/InputBase";
// import FilledInput from "@mui/material/FilledInput";

export const myTheme = createTheme({
  components: {


    MuiInputBase: {
      styleOverrides: {
        input:{
          disabled:{
            color:"warning",
          },
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
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root:{
    //       color:"warning",
    //     },
    //     focused:{color:"white!important",},
    //   },
    // },


    MuiInput: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(178,178,178,0.6)",
          color: "white",
          padding: "1px 0 6px 0",
          lineHeight: "20px",
          marginTop: "9px",
          fontSize: "15px",
          fontWeight: "400",
          ":before": {
            borderBottom: "0",
          },
          ":hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "0 ",
          },
          ":after": {
            borderBottom: "0 ",
          },
          
          input:{
            color:"white",
            disabled:{
            color:"warning",
          },
          },
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
   
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "red",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        },
        body: {
          height: "32px",
          fontSize: "15px",
          fontWeight: "400",
          color: "#CFD2DC",
        },
        head: {
          height: "32px",
          fontSize: "15px",
          fontWeight: "400",
          color: "#9B9B9B",
          textTransform: "uppercase",
        },
      },
    },
    // MuiTable: {
    //   styleOverrides: {
    //     root: {
          //  borderColor:"grey",
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
    
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       paddingLeft:"0",
    //       // transform:"translate(0,20px) scale(1)",
          
    //     },
    //   },
    // },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          // paddingBottom:"6px",
          color: "rgba(179,179,179,1)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "White",
          padding: "0",
          marginRight: "30px",
          opacity: 0.5,
          fontWeight: "600",
          fontSize: "16px",
          minWidth: "0",
          minHeight: "55px",
        },
        
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
            backgroundColor:"#FFFFFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          display:"none",                
        },
      },
    },
  },

  palette: {
    warning: {
      main: "#b3b3b3",
    },
    primary: {
      main: "#A555FF",
    },
  },

  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});
