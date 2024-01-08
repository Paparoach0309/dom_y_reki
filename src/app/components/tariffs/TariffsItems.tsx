import React from "react";
import { tariffData } from "@/app/constants/dataConst";
import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TariffsItems = () => {
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
      {tariffData.map((i) => {
        return (
          <Grid key={i.id} item lg={2} md={4} xs={12} height={"504px"}>
            <Box
              width={"281px"}
              height={i.selected ? "504px" : "485px"}
              borderRadius={"10px"}
              p={"27px 21px"}
              sx={{
                background: i.selected
                  ? "linear-gradient(to bottom, #E9342B, #A90800)"
                  : null,
                boxShadow: "0px 5px 10px 2px rgba(0, 0, 0, 0.1)",
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
                style={{
                  fontFamily: "A1 Sans",
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
                style={{
                  fontFamily: "A1 Sans",
                  fontSize: "12px",
                  width: "114px",
                  lineHeight: "16px",
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
                <Image width={22} height={22} alt="Ok" src={i.selected ? "/img/chooseOk.png" : "/img/check.png"} />
                <Typography
                  style={{
                    fontFamily: "A1 Sans",
                    fontSize: "14px",
                    width: "165px",
                    lineHeight: "19px",
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
                mt={1}
              >
                <Image width={22} height={22} alt="Ok" src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}  />
                <Typography
                  style={{
                    fontFamily: "A1 Sans",
                    fontSize: "14px",
                    width: "165px",
                    lineHeight: "19px",
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
                mt={1}
              >
                <Image width={22} height={22} alt="Ok" src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}  />
                <Typography
                  style={{
                    fontFamily: "A1 Sans",
                    fontSize: "14px",
                    width: "165px",
                    lineHeight: "19px",
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
                mt={1}
              >
                <Image width={22} height={22} alt="Ok" src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}  />
                <Typography
                  style={{
                    fontFamily: "A1 Sans",
                    fontSize: "14px",
                    width: "165px",
                    lineHeight: "19px",
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
                mt={1}
              >
                <Image width={22} height={22} alt="Ok" src={i.selected ? "/img/chooseOk.png" : "/img/check.png"}  />
                <Typography
                  style={{
                    fontFamily: "A1 Sans",
                    fontSize: "14px",
                    width: "165px",
                    lineHeight: "19px",
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
                    background: "#F00",
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

export default TariffsItems;
