import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const themesPalette = new Map([
  [
    "blueTheme",
    {
      themeKey: "blueTheme",
      themeLabel: "Admiral Blue",
      primary: {
        main: "#3026B9",
        light: "#E8E7FA",
      },
      secondary: {
        main: "#082940",
        light: "#082940",
      },
      background: {
        default: "#FAFAFF",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#1D1D11",
        secondary: "#000000",
      },
    },
  ],
  [
    "redTheme",
    {
      themeKey: "redTheme",
      themeLabel: "Scarlet Red",
      primary: {
        main: "#b9262b",
        light: "#fae7e9",
      },
      secondary: {
        main: "#40080c",
        light: "#40080c",
      },
      background: {
        default: "#fffafa",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#1D1D11",
        secondary: "#000000",
      },
    },
  ],
  [
    "darkTheme",
    {
      themeKey: "darkTheme",
      themeLabel: "Midnight Grey",
      primary: {
        main: "#969696",
        light: "#edebeb",
      },
      secondary: {
        main: "#212121",
        light: "#212121",
      },
      background: {
        default: "#fffafa",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#1D1D11",
        secondary: "#000000",
      },
    },
  ],
  [
    "greenTheme",
    {
      themeKey: "greenTheme",
      themeLabel: "Forest Green",
      primary: {
        main: "#35b926",
        light: "#cdf7da",
      },
      secondary: {
        main: "#084009",
        light: "#084009",
      },
      background: {
        default: "#fafffb",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#1D1D11",
        secondary: "#000000",
      },
    },
  ],
]);

export const customTheme = (theme) =>
  createTheme({
    spacing: (factor) => `${0.5 * factor}rem`,
    palette: {
      primary: {
        main: theme.primary.main, //application primary theme colour
        light: theme.primary.light, //lighter version of the application theme color
      },
      background: {
        default: theme.background.default,
        paper: theme.background.paper,
      },
      secondary: {
        main: theme.secondary.main, //accent color
        light: theme.secondary.light, //accent color
      },
      positiveAccent: {
        fontColor: "#073323",
        primary: "#61DAAE",
        secondary: "#27CF92",
      },
      negativeAccesnt: {
        fontColor: "#431919",
        primary: "#ED8A88",
        secondary: "#ED4F4C",
      },
      grey: { 0: "#FFFFFF", 10: "#F5F5F5", 50: "#EEEEEE", 100: "#E0E0E0", 200: "#BDBDBD", 300: "#9E9E9E", 400: "#757575", 500: "#616161", 600: "#3F3F3F", 700: "#424242", 800: "#323232", 900: "#000000" },
      text: {
        primary: theme.text.primary,
        secondary: theme.text.secondary, //For Pinned Task toggle - Grey colour
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true, // No more ripple, on the whole application!
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontWeight: "normal",
      button: {
        textTransform: "none",
        lineHeight: 1.2,
      },
      caption: {
        fontSize: "12px",
        lineHeight: 1.2,
      },
      caption2: {
        fontSize: "10px", //10
        lineHeight: 1.2,
      },
      subtitle1: {
        fontSize: '18px',
        lineHeight: 1.2,
      },
      body1: {
        fontSize: '16px',
        lineHeight: 1.2,
      },
      body2: {
        fontSize: '14px',
        lineHeight: 1.2,
      },
      // 24 - h5
      // 20 -h6
      // 18 - subtitle1
      // 16 - body1
      // 14 body2
      // 12 - caption
      // 10 - caption2ß
    },
  });

export const useCustomStyles = makeStyles((theme) => {
  return {
    customButton: {
      fontWeight: "400 !important",
      boxShadow: "none !important",
      "& .MuiButton-sizeSmall": {
        height: `${theme.spacing(4)} !important`,
        fontSize: "14 !important",
      },
      "& .MuiButton-sizeMedium": {
        height: theme.spacing(4.5),
        fontSize: 14,
      },
      "& .MuiButton-sizeLarge": {
        height: theme.spacing(5),
        fontSize: 16,
      },
      "&.MuiButton-containedSecondary": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        },
      },
      "&.MuiButton-containedPrimary": {
        backgroundColor: theme.palette.primary.main,

        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        },
      },
      "&.MuiButton-containedAction": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        },
      },
    },
    customAutoComplete: {
      "& .MuiAutocomplete-option, .MuiAutocomplete-popper": {
        zIndex: 4,
      },
      "& .MuiOutlinedInput-input": {
        zIndex: 2,
        padding: `${theme.spacing(0, 0, 0, 1)} !important`,
      },
      "& .MuiInputBase-sizeSmall": {
        height: theme.spacing(4),
        fontSize: 14,
      },
      "& .MuiInputBase-sizeMedium": {
        height: theme.spacing(5),
        fontSize: 14,
      },
      "& .MuiInputBase-sizeLarge": {
        height: theme.spacing(6),
        fontSize: 16,
      },
      "& .MuiAutocomplete-endAdornment": {
        zIndex: 2,
        "& .MuiIconButton-root": {
          background: "transparent",
          color: "#495057",
        },
      },
      "&. MuiOutlinedInput-notchedOutline": {
        zIndex: "1",
        border: "1px solid #ced4da",
        "& legend": {
          width: "0%",
        },
      },
    },
    option: {
      "& .MuiAutocomplete-option, .MuiAutocomplete-popper": {
        zIndex: 4,
      },
      zIndex: 4,
    },
  };
});
