"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TariffsNew = () => {
  const [selectedValueAwaraness, setSelectedValueAwaraness] = useState("8");
  const [selectedValuePhishing, setSelectedValuePhishing] = useState("5.6");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValueAwaraness(event.target.value);
  };

  const handleChangePhishing = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValuePhishing(event.target.value);
  };

  const scrollTo = () => {
    const yOffset = 0;
    const element = document?.getElementById("result-form");
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - yOffset;

    window.scrollTo({ top: y || 0, behavior: "smooth" });
  };

  return (
    <>
      <Paper
        id={"security_box"}
        sx={{
          height: 1,
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
          pt: { xs: 3, md: "200px" },
        }}
      >
        <Container maxWidth={"xl"}>
          <Grid
            container
            sx={{
              alignContent: "center",
              alignItems: "center",
              mb: { xs: 3, md: "100px" },
              px: { xs: 2, lg: 10 },
            }}
          >
            <Grid
              item
              md={9}
              lg={9.5}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant={"sans-bold-40-24"}>
                Тарифы Security Awareness
              </Typography>
              <Typography
                variant={"sans-regular-16-14"}
                sx={{
                  py: "17px",
                  color: "var(--main-text, #323037)",
                  maxWidth: 496,
                }}
              >
                Указана стартовая стоимость доступа к платформе, чем больше у
                вас сотрудников, тем ниже цена за человека
              </Typography>
            </Grid>
            <Grid sx={{ width: "100%", mt: "30px" }}>
              <Grid
                container
                spacing={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item lg={4} md={4} xs={12} height={"504px"}>
                  <Box
                    width={{ lg: "377px", md: "320px", xs: "290px" }}
                    height={"518px"}
                    borderRadius={"10px"}
                    p={"27px 21px"}
                    sx={{
                      boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                    // pt={"30px"}
                  >
                    <Typography variant={"sans-bold-24-16"}>
                      Security Awereness
                    </Typography>
                    <Select
                      defaultValue={"Enterprise"}
                      value={selectedValueAwaraness}
                      onChange={handleChange}
                      IconComponent={ExpandMoreIcon}
                      sx={{
                        width: "100%",
                        background: "#FAFAFA",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(228, 219, 233, 0.25)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(228, 219, 233, 0.25)",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "#EB140A",
                        },
                      }}
                    >
                      <MenuItem
                        value={8}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Enterprise
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 1001 до 2000 пользователей
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        value={11}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Small
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 50 до 500 пользователей
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        value={9}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Medium
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 501 до 1000 пользователей
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        value={6}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Enterprise +
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 2000 и более пользователей
                        </Typography>
                      </MenuItem>
                    </Select>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Typography variant={"sans-bold-40-24"}>
                        {selectedValueAwaraness}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "A1Sans",
                          fontWeight: "500",
                          fontSize: "20px",
                          paddingLeft: "2px",
                          color: "#000",
                        }}
                      >
                        руб
                      </Typography>
                      <Typography
                        variant={"sans-regular-13-17 "}
                        style={{
                          fontSize: "14px",
                          lineHeight: "11px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
                        }}
                      >
                        / за сотрудника в мес
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        background: "#DA291C",
                        color: "#fff",
                        width: {
                          lg: "323px",
                          xs: "244px",
                        },
                        height: "44px",
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
                      Заказать
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  xs={12}
                  height={"504px"}
                  my={{ md: "0px", xs: "30px" }}
                >
                  <Box
                    width={{ lg: "377px", md: "320px", xs: "290px" }}
                    height={"518px"}
                    borderRadius={"10px"}
                    p={"27px 21px"}
                    sx={{
                      boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                    // pt={"30px"}
                  >
                    <Typography variant={"sans-bold-24-16"}>
                      Phishing
                    </Typography>
                    <Select
                      defaultValue={"Enterprise"}
                      value={selectedValuePhishing}
                      onChange={handleChangePhishing}
                      IconComponent={ExpandMoreIcon}
                      sx={{
                        width: "100%",
                        background: "#FAFAFA",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(228, 219, 233, 0.25)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(228, 219, 233, 0.25)",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "#EB140A",
                        },
                      }}
                    >
                      <MenuItem
                        value={5.6}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Enterprise
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 1001 до 2000 пользователей
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        value={7.7}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Small
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 50 до 500 пользователей
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        value={6.3}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Medium
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 501 до 1000 пользователей
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        value={4.2}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#EB140A !important",
                          },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography
                          variant={"sans-bold-24-16"}
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          Enterprise +{" "}
                        </Typography>
                        <br />
                        <Typography
                          variant={"sans-regular-14-19"}
                          style={{
                            marginTop: "-20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          от 2000 и более пользователей
                        </Typography>
                      </MenuItem>
                    </Select>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Typography variant={"sans-bold-40-24"}>
                        {selectedValuePhishing}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "A1Sans",
                          fontWeight: "500",
                          fontSize: "20px",
                          paddingLeft: "2px",
                          color: "#000",
                        }}
                      >
                        руб
                      </Typography>
                      <Typography
                        variant={"sans-regular-13-17 "}
                        style={{
                          fontSize: "14px",
                          lineHeight: "11px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
                        }}
                      >
                        / за сотрудника в мес
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
                        }}
                      >
                        Модуль управления пользователями
                      </Typography>
                    </Box>
                    <Button
                      endIcon={<ArrowForwardIosIcon />}
                      onClick={scrollTo}
                      sx={{
                        borderRadius: "5px",
                        background: "#DA291C",
                        color: "#fff",
                        width: {
                          lg: "323px",
                          xs: "244px",
                        },
                        height: "44px",
                        fontFamily: "A1 Sans",
                        fontWeight: "500",
                        fontSize: "14px",
                        mt: "121px",
                        p: "16px 30px 16px 30px",
                        zIndex: 2,
                        "&:hover": {
                          background: "#F00",
                        },
                      }}
                    >
                      Заказать
                    </Button>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} xs={12} height={"504px"}>
                  <Box
                    width={{ lg: "377px", md: "320px", xs: "290px" }}
                    height={"518px"}
                    borderRadius={"10px"}
                    p={"27px 21px"}
                    sx={{
                      boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                    // pt={"30px"}
                  >
                    <Typography variant={"sans-bold-24-16"}>
                      Phishing Light
                    </Typography>
                    <Box
                      height={"64px"}
                      width={"100%"}
                      py={"10px"}
                      sx={{
                        background: "#FAFAFA",
                      }}
                    >
                      <Typography
                        variant={"sans-bold-24-16"}
                        style={{
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                      >
                        Enterprise
                      </Typography>
                      <br />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        до 1000 E-mails
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mt={"26px"}
                    >
                      <Typography variant={"sans-bold-40-24"}>5 420</Typography>
                      <Typography
                        style={{
                          fontFamily: "A1Sans",
                          fontWeight: "500",
                          fontSize: "20px",
                          paddingLeft: "2px",
                          color: "#000",
                        }}
                      >
                        руб{" "}
                      </Typography>
                      <Typography
                        variant={"sans-regular-13-17 "}
                        style={{
                          fontSize: "14px",
                          lineHeight: "11px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
                        }}
                      >
                        / единоразово
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
                        }}
                      >
                        Модуль фишинга для разовой рассылки
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
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
                        src={"/img/check.png"}
                      />
                      <Typography
                        variant={"sans-regular-14-19"}
                        style={{
                          fontSize: "16px",
                          color: "rgba(115, 115, 115, 1)",
                          paddingLeft: "10px",
                        }}
                      >
                        Модуль управления пользователями
                      </Typography>
                    </Box>
                    <Button
                      endIcon={<ArrowForwardIosIcon />}
                      onClick={scrollTo}
                      sx={{
                        borderRadius: "5px",
                        background: "#DA291C",
                        color: "#fff",
                        width: {
                          lg: "323px",
                          xs: "244px",
                        },
                        height: "44px",
                        fontFamily: "A1 Sans",
                        fontWeight: "500",
                        fontSize: "14px",
                        mt: "103px",
                        p: "16px 30px 16px 30px",
                        zIndex: 2,
                        "&:hover": {
                          background: "#F00",
                        },
                      }}
                    >
                      Заказать
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default TariffsNew;
