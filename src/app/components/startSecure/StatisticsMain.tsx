"use client";
import React from "react";
import {
  useMediaQuery,
  Stack,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import theme from "@/app/theme/theme";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StatisticsMain = () => {
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Stack
      pt={{ md: "200px", xs: "80px" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container maxWidth={"lg"}>
        <Typography variant={"sans-bold-40-24"}>
          {isSM ? "Статистика фишинговых атак" : ""}
        </Typography>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image
            src={"/img/statistics.png"}
            alt={"statistics"}
            width={isLG ? 1200 : isMD ? 773 : isSM ? 531 : 288}
            height={isLG ? 500 : isMD ? 337 : isSM ? 280 : 221}
            style={{
              margin: isLG ? "40px 0px 0px 40px" : "20px 0px 0px 0px",
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default StatisticsMain;
