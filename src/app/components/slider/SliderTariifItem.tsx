"use client";
import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SliderTariifItem = ({
  title,
  desc,
  price,
  type,
  id,
  selected,
}: {
  title: string;
  desc: string;
  price: string;
  type: string;
  id: number;
  selected: boolean;
}) => {
  const scrollTo = () => {
    const yOffset = 0;
    const element = document?.getElementById("result-form");
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - yOffset;

    window.scrollTo({ top: y || 0, behavior: "smooth" });
  };

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"start"}
      columns={8}
      item
      xs={8}
      display={{ xs: "none", md: "flex" }}
      height={"504px"}
    >
      <Grid item lg={2} md={4} xs={12} height={"485px"}>
        <Box
          width={"284px"}
          height={selected ? "504px" : "485px"}
          borderRadius={"10px"}
          p={"27px 21px"}
          sx={{
            background: selected
              ? "linear-gradient(to bottom, #E9342B, #A90800)"
              : null,
            boxShadow: "0px 6px 10px 0px #0000001A",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { md: "start", xs: "center" },
          }}
        >
          <Typography
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: selected ? "#fff" : "#000",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant={"sans-regular-13-17 "}
            style={{
              fontSize: "12px",
              width: "114px",
              lineHeight: "16px",
              color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
            }}
          >
            {desc}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography
              variant={"sans-bold-40-24"}
              style={{
                color: selected ? "#fff" : "#000",
              }}
            >
              {price}
            </Typography>
            <Typography
              style={{
                fontFamily: "A1 Sans",
                fontWeight: "500",
                fontSize: "20px",
                paddingLeft: "2px",
                color: selected ? "#fff" : "#000",
              }}
            >
              {type}
            </Typography>
          </Box>
          <Typography
            variant={"sans-regular-13-17 "}
            style={{
              fontSize: "12px",
              width: "134px",
              lineHeight: "16px",
              color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
            }}
          >
            за сотрудника в мес
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={2}
          >
            <Image
              width={22}
              height={22}
              alt="Ok"
              src={selected ? "/img/chooseOk.png" : "/img/check.png"}
            />
            <Typography
              variant={"sans-regular-14-19"}
              style={{
                textDecoration: "line-through",
                width: "165px",
                color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
              }}
            >
              Модуль обучения
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={1}
          >
            <Image
              width={22}
              height={22}
              alt="Ok"
              src={selected ? "/img/chooseOk.png" : "/img/check.png"}
            />
            <Typography
              variant={"sans-regular-14-19"}
              style={{
                width: "165px",
                color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
              }}
            >
              Модуль фишинга
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={1}
          >
            <Image
              width={22}
              height={22}
              alt="Ok"
              src={selected ? "/img/chooseOk.png" : "/img/check.png"}
            />
            <Typography
              variant={"sans-regular-14-19"}
              style={{
                width: "165px",
                color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
              }}
            >
              Модуль статистики
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={1}
          >
            <Image
              width={22}
              height={22}
              alt="Ok"
              src={selected ? "/img/chooseOk.png" : "/img/check.png"}
            />
            <Typography
              variant={"sans-regular-14-19"}
              style={{
                textDecoration: "line-through",
                width: "165px",
                color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
              }}
            >
              Модуль управления пользователями
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={1}
          >
            <Image
              width={22}
              height={22}
              alt="Ok"
              src={selected ? "/img/chooseOk.png" : "/img/check.png"}
            />
            <Typography
              variant={"sans-regular-14-19"}
              style={{
                textDecoration: "line-through",
                width: "165px",
                color: selected ? "#fff" : "rgba(115, 115, 115, 1)",
              }}
            >
              Модуль создания
              <br />
              базы курсов
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={scrollTo}
            sx={{
              borderRadius: "5px",
              background: selected ? "#fff" : "#DA291C",
              color: selected ? "#F30000" : "#fff",
              width: {
                lg: "238px",
                xs: "210px",
              },
              height: "37px",
              fontFamily: "A1 Sans",
              fontWeight: "500",
              fontSize: "14px",
              mt: "25px",
              p: "16px 30px 16px 30px",
              zIndex: 2,
              "&:hover": {
                background: selected ? "#fff" : "#F00",
              },
            }}
          >
            Попробовать
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SliderTariifItem;
