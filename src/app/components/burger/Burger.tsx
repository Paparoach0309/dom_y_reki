import { Box } from "@mui/material";
import React from "react";

type burgerType = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};
export const Burger: React.FC<burgerType> = ({ open, setOpen }) => {
  return (
    <Box
      onClick={() => setOpen(!open)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "2rem",
        height: "2rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0",
        zIndex: "10",
        ":focus": { outline: "none" },
        "& div": {
          width: "2rem",
          height: "0.25rem",
          background: open ? "#da291c" : "#000",
          transition: "all 0.3s linear",
          position: "relative",
          transformOrigin: "1px",
          ":first-child": {
            transform: open ? "rotate(45deg)" : "rotate(0)",
          },
          ":nth-child(2)": {
            opacity: open ? "0" : "1",
            transform: open ? "translateX(20px)" : "translateX(0)",
          },
          ":nth-child(3)": {
            transform: open ? "rotate(-45deg)" : "rotate(0)",
          },
        },
      }}
    >
      <div />
      <div />
      <div />
    </Box>
  );
};
