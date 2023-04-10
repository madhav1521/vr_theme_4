import { createTheme } from "@mui/material";
import { yellow, purple, green, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import pink from "@mui/material/colors/pink";

export const myTheme = createTheme({
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
  components: {

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "rgba(179,179,179,1)",
        },

      },
    },
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
         
          input: {
            color: "white",
            disabled: {
              color: "warning",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background:"transparent",
          borderRadius:0,
          "&:hover, &:focus, &active": {
            opacity: "0.8",
          },
          
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          flexBasis: "100%",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          height: "44px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        },
        body: {
          fontSize: "15px",
          fontWeight: "400",
          color: "#CFD2DC",
        },
        head: {
          fontSize: "15px",
          fontWeight: "400",
          color: "#9B9B9B",
          textTransform: "uppercase",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          marginTop: "20px",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#b2b2b2",
          textDecoration: "none",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "rgba(179,179,179,1)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "rgba(179,179,179,1)",
        },
      },
    },
    // MuiFormControl: {
    //   styleOverrides: {
    //     root: {
    //       color: "rgba(179,179,179,1)",
    //       ".disable-textfield.Mui-disabled":{
    //         color:red,
    //       },
    //     },
    //   },
    // },
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
          '&.Mui-selected': {
            color: "white",
            opacity: "1",
          },
        },

      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0F1E4E",
          color: "white",
          boxShadow: "0px 0px 19px rgba(0, 0, 0, 0.17)",
          padding: "20px",
          gap: "10px"
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "white",
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
          display: "none",
        },
      },
    },
  },

});
