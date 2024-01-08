"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import theme from "@/app/theme/theme";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const PlatformMain = () => {
  const [clicked, setClicked] = useState(false);
  const isProd = process.env.NODE_ENV === "production";

  const handleOpen = () => {
    window.open(
      `${
        isProd
          ? "/dom_y_reki" + "/assets/pdf/Security_Awareness.pdf"
          : "/assets/pdf/Security_Awareness.pdf"
      }`,
      "_blank"
    );
    setClicked(true);
  };

  // const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  // const isSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isMD ? (
        <Paper
          id={"platform_box"}
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            // backgroundImage: {
            //   md: `url(${isProd ? "/dom_y_reki" : ""}/img/statBackgroundmd.png)`,
            //   sm: `url(${isProd ? "/dom_y_reki" : ""}/img/statBackgroundmd.png)`,
            //   xs: `url(${isProd ? "/dom_y_reki" : ""}/img/statBackgroundxs.png)`,
            // },
            // backgroundSize: {
            //   md: "100% 100%",
            //   xs: "100% 100%",
            // },
            // backgroundRepeat: "no-repeat",
            // position: "relative",
            // overflow: "hidden",
          }}
        >
          <Container maxWidth={"xl"}>
            <Grid
              container
              sx={{
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Grid item sx={{ py: "60px" }}>
                <Typography variant={"sans-bold-40-24"}>
                  Как работает платформа
                </Typography>
              </Grid> */}
              {/* <Grid
                container
                justifyContent={"space-between"}
                p={"100px 50px"}
                boxShadow={"0px 0px 15px 0px #00000012"}
                borderRadius={"10px"}
                sx={{ backgroundColor: "#FFFFFF4F" }}
              >
                <Grid item xs={4}>
                  <Box
                    sx={{
                      gap: "45px",
                      flex: "1 1 35%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                    }}
                  >
                    <Typography
                      variant={"sans-bold-24-14"}
                      style={{ maxWidth: "360px" }}
                    >
                      Позволяет создавать любые фишинговые рассылки
                    </Typography>
                    <Typography variant={"sans-regular-18"}>
                      Минимизирует риски бизнеса за счет встроенного в систему
                      фишингового модуля, который проверяет, как поведут себя
                      сотрудники при реальной атаке
                    </Typography>
                  </Box>
                </Grid> */}
              {/* <Grid item xs={8} pl={3}>
                  <Image
                    src={"/img/qwerty.gif"}
                    alt={"statistics"}
                    width={isLG ? 1015 : isMD ? 773 : isSM ? 531 : 288}
                    height={isLG ? 394 : isMD ? 337 : isSM ? 280 : 221}
                    style={{
                      borderRadius: "20px",
                      borderRight: "5px solid #E9342B",
                      borderBottom: "5px solid #E9342B",
                    }}
                  />
                </Grid>
              </Grid> */}
              {/* <Grid
                container
                justifyContent={"space-between"}
                p={"100px 50px"}
                boxShadow={"0px 0px 15px 0px #00000012"}
                borderRadius={"10px"}
                my={"80px"}
                sx={{ backgroundColor: "#FFFFFF4F" }}
              >
                <Grid item xs={8}>
                  <Box>
                    <Image
                      src={"/img/qwerty1.gif"}
                      alt={"statistics"}
                      width={isLG ? 1015 : isMD ? 773 : isSM ? 531 : 288}
                      height={isLG ? 394 : isMD ? 337 : isSM ? 280 : 221}
                      style={{
                        borderRadius: "20px",
                        borderRight: "5px solid #E9342B",
                        borderBottom: "5px solid #E9342B",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      gap: "45px",
                      flex: "1 1 45%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                      pl: 3,
                    }}
                  >
                    <Typography
                      variant={"sans-bold-24-14"}
                      style={{ maxWidth: "380px" }}
                    >
                      Развивает сотрудников с помощью загруженных курсов
                    </Typography>
                    <Typography variant={"sans-regular-18"}>
                      Уже наполненные курсы, материалы и набор теоретических
                      блоков — всё необходимое для развития сотрудников в
                      области информационной безопасности
                    </Typography>
                  </Box>
                </Grid>
              </Grid> */}
              {/* <Grid
                container
                justifyContent={"space-between"}
                p={"100px 50px"}
                boxShadow={"0px 0px 15px 0px #00000012"}
                borderRadius={"10px"}
                sx={{ backgroundColor: "#FFFFFF4F" }}
              >
                <Grid item xs={4}>
                  <Box
                    sx={{
                      gap: "45px",
                      flex: "1 1 35%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                    }}
                  >
                    <Typography
                      variant={"sans-bold-24-14"}
                      style={{ maxWidth: "360px" }}
                    >
                      Позволяет контролировать результаты
                    </Typography>
                    <Typography variant={"sans-regular-18"}>
                      Подробный анализ текущего уровня знаний сотрудников в
                      режиме реального времени после рассылок и пройденных
                      курсов
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8} pl={3}>
                  <Image
                    src={"/img/qwerty2.gif"}
                    alt={"statistics"}
                    width={isLG ? 1015 : isMD ? 773 : isSM ? 531 : 288}
                    height={isLG ? 394 : isMD ? 337 : isSM ? 280 : 221}
                    style={{
                      borderRadius: "20px",
                      borderRight: "5px solid #E9342B",
                      borderBottom: "5px solid #E9342B",
                      boxShadow: "0px 6px 10px 0px #0000001A",
                    }}
                  />
                </Grid>
              </Grid> */}
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Button
                  endIcon={<FileDownloadOutlinedIcon />}
                  onClick={handleOpen}
                  className={clicked ? "clicked" : ""}
                  sx={{
                    border: "2px solid #EB140A",
                    borderRadius: "10px",
                    background: "#F2F2F2",
                    color: "#EB140A",
                    width: {
                      lg: "364px",
                      xs: "288px",
                    },
                    height: {
                      lg: "60px",
                      xs: "50px",
                    },
                    fontFamily: "A1Sans-Regular",
                    fontSize: {
                      lg: "19.877px",
                      xs: "12.78px",
                    },
                    my: "45px",
                    p: {
                      lg: "18px 28px",
                      xs: "13px 21px",
                    },
                    zIndex: 3,
                    "&.clicked": {
                      opacity: "0.5",
                      cursor: "default",
                    },
                    "&:hover": {
                      cursor: "pointer",
                      color: "#EB4A3B",
                    },
                  }}
                >
                  Узнать подробнее
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      ) : (
        <Paper
          id={"platform_box"}
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            pb: "35px",
            // backgroundImage: `url(${
            //   isProd ? "/dom_y_reki" : ""
            // }/img/statBackgroundxs.png)`,
            // backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat",
            // position: "relative",
            // overflow: "hidden",
          }}
        >
          <Container maxWidth={"xs"}>
            {/* <Grid
              container
              sx={{
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ py: "35px" }}>
                <Typography variant={"sans-bold-40-24"}>
                  Как работает платформа?
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                p={"15px 10px 15px 10px"}
                boxShadow={"0px 3px 5px 0px #0000001A"}
                borderRadius={"20px"}
                sx={{ backgroundColor: "#FFFFFF4F" }}
              >
                <Typography variant={"sans-bold-24-14"}>
                  Позволяет создавать любые фишинговые рассылки
                </Typography>
                <Image
                  src={"/img/qwerty.gif"}
                  alt={"statistics"}
                  width={268}
                  height={165}
                  style={{
                    borderRadius: "20px",
                    borderRight: "5px solid #E9342B",
                    borderBottom: "5px solid #E9342B",
                    paddingTop: "-2px",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                />
                <Typography variant={"sans-regular-13-17 "}>
                  Минимизирует риски бизнеса за счет встроенного в систему
                  фишингового модуля, который проверяет, как поведут себя
                  сотрудники при реальной атаке
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                my={"60px"}
                p={"15px 10px 15px 10px"}
                boxShadow={"0px 3px 5px 0px #0000001A"}
                borderRadius={"20px"}
                sx={{ backgroundColor: "#FFFFFF4F" }}
              >
                <Typography variant={"sans-bold-24-14"}>
                  Развивает сотрудников с помощью загруженных курсов
                </Typography>
                <Image
                  src={"/img/qwerty1.gif"}
                  alt={"statistics"}
                  width={531}
                  height={280}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "red",
                    paddingLeft: "5px",
                    paddingBottom: "5px",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                />
                <Typography variant={"sans-regular-13-17 "}>
                  Уже наполненные курсы, материалы и набор теоретических блоков
                  — всё необходимое для развития сотрудников в области
                  информационной безопасности
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                p={"15px 10px 15px 10px"}
                boxShadow={"0px 3px 5px 0px #0000001A"}
                borderRadius={"20px"}
                sx={{ backgroundColor: "#FFFFFF4F" }}
              >
                <Typography variant={"sans-bold-24-14"}>
                  Позволяет контролировать результаты
                </Typography>
                <Image
                  src={"/img/qwerty2.gif"}
                  alt={"statistics"}
                  width={isLG ? 1015 : isMD ? 773 : isSM ? 531 : 288}
                  height={isLG ? 394 : isMD ? 337 : isSM ? 280 : 221}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "red",
                    paddingRight: "5px",
                    paddingBottom: "5px",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                />
                <Typography variant={"sans-regular-13-17 "}>
                  Подробный анализ текущего уровня знаний сотрудников в режиме
                  реального времени после рассылок и пройденных курсов
                </Typography>
              </Grid> */}
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Button
                endIcon={<FileDownloadOutlinedIcon />}
                onClick={handleOpen}
                className={clicked ? "clicked" : ""}
                sx={{
                  border: "2px solid #EB140A",
                  borderRadius: "10px",
                  background: "#F2F2F2",
                  color: "#EB140A",
                  width: {
                    lg: "364px",
                    xs: "288px",
                  },
                  height: {
                    lg: "60px",
                    xs: "50px",
                  },
                  fontFamily: "A1Sans-Regular",
                  fontSize: {
                    lg: "19.877px",
                    xs: "12.78px",
                  },
                  mt: "35px",
                  p: {
                    lg: "18px 28px 18px 28px",
                    xs: "13px 21px 13px 21px",
                  },
                  zIndex: 3,
                  "&.clicked": {
                    opacity: "0.5",
                    cursor: "default",
                  },
                  "&:hover": {
                    cursor: "pointer",
                    color: "#EB4A3B",
                  },
                }}
              >
                Узнать подробнее
              </Button>
            </Grid>
            {/* </Grid> */}
          </Container>
        </Paper>
      )}
    </>
  );
};

export default PlatformMain;
