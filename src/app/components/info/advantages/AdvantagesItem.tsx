"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface IAdvantagesItem {
  item: any;
}

const AdvantagesItem: FC<IAdvantagesItem> = ({ item }) => {
  const [isHovering, setIsHovered] = useState<boolean>(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: { md: "start", xs: "center" },
      }}
      pt={"15px"}
    >
      <Box
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Image
          src={`/img/${isHovering ? item.img : item.imgHover}.png`}
          alt={item.title}
          width={80}
          height={80}
        />
      </Box>
      <Typography variant={"sans-bold-24-16"} style={{ paddingTop: "15px" }}>
        {item.title}
      </Typography>
      <Typography
        variant={"sans-regular-20-12"}
        sx={{
          pt: "15px",
          mb: "35px",
          width: { md: "360px", xs: "260px" },
          textAlign: { md: "left", xs: "center" },
        }}
      >
        {item.subtitle}
      </Typography>
    </Box>
  );
};

export default AdvantagesItem;
