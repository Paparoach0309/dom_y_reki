import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { awesomeTariffData } from "@/app/constants/dataConst";

const AwesomeTariffItem = () => {
  
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
      justifyContent={"center"}
      columns={8}
      item
      xs={8}
    >
      {awesomeTariffData.map((i) => {
        return (
          <Grid key={i.id} item lg={2} md={4} xs={12} height={"504px"}>
            <Box
              width={"284px"}
              height={i.selected ? "504px" : "485px"}
              borderRadius={"10px"}
              p={"27px 21px"}
              sx={{
                background: i.selected
                  ? "linear-gradient(to bottom, #E9342B, #A90800)"
                  : null,
                boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { md: "start", xs: "center" },
              }}
              pt={"15px"}
            >
              <Typography
                variant={"sans-bold-24-16"}
                style={{
                  paddingTop: "15px",
                  color: i.selected ? "#fff" : "#000",
                }}
              >
                {i.title}
              </Typography>
              <Typography
                variant={"sans-regular-13-17 "}
                style={{
                  fontSize: "12px",
                  width: "114px",
                  lineHeight: "16px",
                  color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
                }}
              >
                {i.desc}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  variant={"sans-bold-40-24"}
                  style={{
                    color: i.selected ? "#fff" : "#000",
                  }}
                >
                  {i.price}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "A1 Sans",
                    fontWeight: "500",
                    fontSize: "20px",
                    paddingLeft: "2px",
                    color: i.selected ? "#fff" : "#000",
                  }}
                >
                  {i.type}
                </Typography>
              </Box>
              <Typography
                variant={"sans-regular-13-17 "}
                style={{
                  fontSize: "12px",
                  width: "134px",
                  lineHeight: "11px",
                  color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
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
                  src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}
                />
                <Typography
                  variant={"sans-regular-14-19"}
                  style={{
                    width: "165px",
                    color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
                  }}
                >
                  Модуль обучения
                </Typography>
              </Box>
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
                  src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}
                />
                <Typography
                  variant={"sans-regular-14-19"}
                  style={{
                    width: "165px",
                    color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
                  }}
                >
                  Модуль фишинга
                </Typography>
              </Box>
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
                  src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}
                />
                <Typography
                  variant={"sans-regular-14-19"}
                  style={{
                    width: "165px",
                    color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
                  }}
                >
                  Модуль статистики
                </Typography>
              </Box>
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
                  src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}
                />
                <Typography
                  variant={"sans-regular-14-19"}
                  style={{
                    width: "165px",
                    color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
                  }}
                >
                  Модуль управления пользователями
                </Typography>
              </Box>
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
                  src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}
                />
                <Typography
                  variant={"sans-regular-14-19"}
                  style={{
                    width: "165px",
                    color: i.selected ? "#fff" : "rgba(115, 115, 115, 1)",
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
                  background: i.selected ? "#fff" : "#DA291C",
                  color: i.selected ? "#F30000" : "#fff",
                  width: {
                    lg: "238px",
                    xs: "244px",
                  },
                  height: "37px",
                  fontFamily: "A1 Sans",
                  fontWeight: "500",
                  fontSize: "14px",
                  mt: "45px",
                  p: "16px 30px 16px 30px",
                  zIndex: 2,
                  "&:hover": {
                    background: i.selected ? "#fff" : "#F00",
                  },
                }}
              >
                Попробовать
              </Button>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AwesomeTariffItem;
