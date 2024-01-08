import { Theme } from "@mui/material";

const MuiTypography = (theme: Theme) => {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: 0,
          "&::selection": {
            background: "#DA291C",
            color: "white",
          },
          "&::-moz-selection": {
            background: "#DA291C",
            color: "white",
          },
        },
      },
      variants: [
        {
          props: { variant: "sans-regular-18" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "18px",
              lineHeight: "24px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "20px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-regular-14-20" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "14px",
              lineHeight: "20px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "20px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-regular-20-12" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "20px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "12px",
            },
            marginTop: "20px",
            color: "#000",
            textAlign: "center",
            fontFamily: "A1Sans-Regular",
            whiteSpace: "pre-wrap",
          },
        },
        {
          props: { variant: "sans-regular-16-14" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "16px",
              lineHeight: "24px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "18px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-regular-15-12" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "15px",
              lineHeight: "24px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "12px",
              lineHeight: "16px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-bold-20-26" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "20px",
              lineHeight: "26px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "20px",
            },
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "sans-bold-24-18" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
              lineHeight: "26px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
              lineHeight: "20px",
            },
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "sans-bold-18-10" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "18px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "10px",
            },
            fontFamily: "A1Sans-Bold",
            color: "#fff",
          },
        },
        {
          props: { variant: "sans-bold-16-14" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "16px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
            },
            fontFamily: "A1Sans-Bold",
            color: "#000",
          },
        },
        {
          props: { variant: "serif-bold-56-60" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "56px",
              lineHeight: "60px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "40px",
              lineHeight: "48px",
            },
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "serif-bold-50-18" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "50px",
              lineHeight: "60px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
              lineHeight: "24px",
            },
            color: "var(--text-styles-headings-dark, #0D0D0D)",
            textAlign: "center",
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "serif-bold-54-18" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "54px",
              lineHeight: "normal",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
              lineHeight: "20px",
            },
            color: "#fff",
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "serif-bold-52-70" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "52px",
              lineHeight: "70px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
              lineHeight: "20px",
            },
            color: "#fff",
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "sans-bold-24-16" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
              lineHeight: "32px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
              lineHeight: "24px",
            },
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "serif-bold-24-16" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
              lineHeight: "32px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
              lineHeight: "24px",
            },
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "sans-regular-24-14" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-bold-24-14" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
            },
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "sans-regular-32-56" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "32px",
              lineHeight: "56px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "18px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-regular-13-17" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "13px",
              lineHeight: "17px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "12px",
              lineHeight: "16px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-regular-14-19" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "19px",
            },
            fontFamily: "A1Sans-Regular",
          },
        },
        {
          props: { variant: "sans-bold-24-32" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
              lineHeight: "32px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "20px",
              lineHeight: "27px",
            },
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "serif-bold-54-68" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "54px",
              lineHeight: "68px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "24px",
              lineHeight: "32px",
            },
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "serif-bold-18-24" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "20px",
              lineHeight: "23px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "18px",
              lineHeight: "24px",
            },
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "sans-bold-40-24" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "52px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "24px",
              lineHeight: "32px",
            },
            fontFamily: "A1Serif-Bold",
          },
        },
        {
          props: { variant: "sans-bold-34-44" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "34px",
              lineHeight: "44px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
              lineHeight: "20px",
            },
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "sans-bold-85-32" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "85px",
              lineHeight: "85px",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "50px",
              lineHeight: "50px",
            },
            color: "#000",
            fontFamily: "A1Sans-Bold",
          },
        },
        {
          props: { variant: "textLink" },
          style: {
            [theme.breakpoints.up("md")]: {
              fontSize: "14px ",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
            },
            backgroundColor: "none",
            color: "#DA291C",
            textTransform: "none",
            fontFamily: "A1Sans-Regular",
            "&:hover": {
              backgroundColor: "none",
              transition: "none",
            },
          },
        },
      ],
    },
  };
};

export default MuiTypography;
