import { createTheme } from "@mui/material";
export const innerTheme = createTheme({
    components: {
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
                    "&.Mui-disabled": {
                        borderBottom: "1px dashed white",
                    },


                },
                input:{
                    color:"#FFFFFF",
                    "&.Mui-disabled": {
                        color:"#FFFFFF",
                        },
                    },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: "1px solid #CFD2DC",
                    color: "#CFD2DC",
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    width: "100%",

                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "rgba(179,179,179,1)",
                    "&.Mui-disabled": {
                        color: "#B2B2B2",
                    },
                },
            },
        },
        
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: "#B2B2B2",
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: "#B2B2B2",
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
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "White",
                    // padding: "0",
                    // marginRight: "30px",
                    borderBottom: "1px solid #FFFFFF",
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
                    borderBottom: "3px solid primary",

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
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
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