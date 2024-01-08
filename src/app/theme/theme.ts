import { createTheme, ThemeOptions } from "@mui/material";
import muiTypography from "@/app/theme/muiTypography";
import MuiButton from "@/app/theme/muiButton";

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1224,
      xl: 1440,
    },
  },
};

let theme = createTheme(themeOptions);

theme = createTheme(theme, {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1224,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: ["A1Sans-Regular", "sans-serif"].join(","),
    letterSpacing: 0,
    fontSize: 12,
    fontDisplay: "swap",
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
    h1: {
      fontFamily: "A1Serif-Bold",
      [theme.breakpoints.up("md")]: {
        fontSize: "54px",
        lineHeight: "68px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    h2: {
      fontFamily: "A1Serif-Bold",
      [theme.breakpoints.up("md")]: {
        fontSize: "40px",
        lineHeight: "52px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    h3: {
      fontFamily: "A1Serif-Bold",
      [theme.breakpoints.up("md")]: {
        fontSize: "32px",
        lineHeight: "42px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "20px",
      },
    },
    h4: {
      fontFamily: "A1Serif-Bold",
      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "32px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    body1: {
      fontFamily: "A1Sans-Regular",
      [theme.breakpoints.up("md")]: {
        fontSize: "15px",
        lineHeight: "24px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "22px",
      },
    },
    body2: {
      fontFamily: "A1Sans-Regular",
      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "32px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: "22px",
      },
    },
  },

  components: {
    ...muiTypography(theme),
    ...MuiButton(),
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.between(1224, 1271)]: {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "not-fill": true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "sans-regular-18": true;
    "sans-regular-14-20": true;
    "sans-regular-14-19": true;
    "sans-bold-20-26": true;
    "sans-bold-16-14": true;
    "sans-regular-24-14": true;
    textLink: true;
    "serif-bold-24-16": true;
    "serif-bold-56-60": true;
    "serif-bold-52-70": true;
    "sans-bold-24-32": true;
    "serif-bold-54-68": true;
    "sans-regular-32-56": true;
    "sans-bold-40-24": true;
    "serif-bold-18-24": true;
    "sans-bold-34-44": true;
    "sans-regular-13-17 ": true;
    "sans-regular-16-14": true;
    "sans-bold-85-32": true;
    "sans-bold-24-14": true;
    "serif-bold-54-18": true;
    "sans-bold-24-18": true;
    "sans-regular-20-12": true;
    "serif-bold-50-18": true;
    "sans-regular-15-12": true;
    "sans-bold-18-10": true;
    "sans-bold-24-16": true;
  }
}

export default theme;
