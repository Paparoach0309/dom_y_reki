import { Box } from "@mui/material";
import React from "react";

type menuType = {
  open: boolean;
  scrollTo: () => void;
};
export const Menu: React.FC<menuType> = ({ open, scrollTo }) => {
  return (
    <Box
      sx={{
        display: open ? "flex" : "none",
        marginTop: "61px",
        flexDirection: "column",
        backgroundColor: "#FFF",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        textAlign: "left",
        position: "absolute",
        top: "0",
        left: "0",
        transition: "transform 0.3s ease-in-out",
        width: "100%",
        zIndex: "9",
        "& a": {
          display: "flex",
          alignItems: "center",
          fontFamily: "A1Sans-Regular",
          color: "#000",
          height: "47px",
          paddingLeft: "16px",
        },
      }}
    >
      <a href="https://a1data.by/data-center/">О Дата-центре</a>
      <a href="https://a1data.by/services/">Услуги</a>
      <a href="https://a1data.by/faq/">Центр поддержки клиентов</a>
    </Box>
  );
};
