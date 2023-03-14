import { createTheme } from "@mui/material";
import { yellow, purple, green } from "@mui/material/colors";
import pink from "@mui/material/colors/pink";
// import TextField from "@mui/material/TextField";
// import InputBase from "@mui/material/InputBase";
// import FilledInput from "@mui/material/FilledInput";

export const myTheme = createTheme({
//   components: {
//     MuiFilledInput: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "transparent",
//           color: "red",
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//         //   backgroundColor: "red",
//           //   color:"red",
//         },
//       },
//     },
//   },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: pink[900],
    },
    success: {
      main: yellow[600],
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});