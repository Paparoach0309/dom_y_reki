"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Image from "next/image";
import { Icon } from "@/app/components/Icon";
import Link from "next/link";
import { Burger } from "@/app/components/burger/Burger";
import { Menu } from "@/app/components/menu/Menu";

const Header = () => {
  const isProd = process.env.NODE_ENV === "production";
  const [open, setOpen] = useState(false);
  const scrollTo = () => {
    open && setOpen(false);
    const yOffset = 0;
    const element = document?.getElementById("calculator_main");
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - yOffset;

    window.scrollTo({ top: y || 0, behavior: "smooth" });
  };

  const handleScriptClick = () => {
    const script = document.getElementsByClassName(
      "b24-widget-button-inner-container"
    );
    // @ts-ignore
    script.item(0).click();
  };

  return (
    <>
      <AppBar
        id={"app_bar"}
        position="static"
        elevation={0}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          display: {
            xs: "none",
            lg: "block",
          },
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.19)",
          backdropFilter: "blur(2.5px)",
          justifyContent: "center",
          // position: "relative",
        }}
      >
        <Toolbar id={"main_tool_bar"} variant="dense" disableGutters>
          <Container maxWidth={"lg"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "1px",
                  width: "97px",
                  height: "98px",
                  boxShadow: "0 8px 24px -8px rgba(0, 0, 0, .12)",
                }}
              >
                <Link href={"https://a1data.by/"}>
                  <Image
                    src={isProd ? "/dom_y_reki/img/a1logo.svg" : "/img/a1logo.svg"}
                    alt={"logo"}
                    width={56}
                    height={61}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  maxHeight: "259px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: "fit-content",
                      color: "black",
                    }}
                  >
                    <Box
                      sx={{
                        cursor: "pointer",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 10px",
                        fontSize: "16px",
                        fontFamily: "A1Sans-Regular",
                        whiteSpace: "nowrap",
                        ":hover": { color: "red" },
                      }}
                    >
                      <a href="https://a1data.by/data-center/">О Дата-центре</a>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      height: "100%",
                      width: "fit-content",
                      color: "black",
                    }}
                  >
                    <Box
                      sx={{
                        cursor: "pointer",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 10px",
                        fontSize: "16px",
                        fontFamily: "A1Sans-Regular",
                        whiteSpace: "nowrap",
                        ":hover": { color: "red" },
                      }}
                    >
                      <a href="https://a1data.by/services/">Услуги</a>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      height: "100%",
                      width: "fit-content",
                      color: "black",
                    }}
                  >
                    <Box
                      sx={{
                        cursor: "pointer",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 10px",
                        fontSize: "16px",
                        fontFamily: "A1Sans-Regular",
                        whiteSpace: "nowrap",
                        ":hover": { color: "red" },
                      }}
                    >
                      <a href="https://a1data.by/faq/">
                        Центр поддержки клиентов
                      </a>
                    </Box>
                  </Box>
                </Container>
                <Stack
                  direction={"row"}
                  spacing={{ md: "20px", xs: "10px" }}
                  alignItems={"center"}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Box
                      sx={{
                        color: "#000",
                        fontFamily: "A1Serif-Regular",
                        fontSize: "22px",
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                      }}
                    >
                      <IconButton aria-label="phone" size="large">
                        <CallOutlinedIcon />
                      </IconButton>
                      <a href="tel:+375296000225">+375(29)600-02-25</a>
                    </Box>
                  </Stack>
                  <Button
                    size={"small"}
                    variant={"not-fill"}
                    startIcon={
                      <Icon icon={"phone"} size={18} color={"#FC1C23"} />
                    }
                    onClick={handleScriptClick}
                  >
                    <Typography
                      variant={"sans-regular-14-20"}
                      sx={{
                        color: "#FC1C23",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Заказать звонок
                    </Typography>
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <AppBar
        id={"app_bar"}
        position="static"
        elevation={0}
        sx={{
          height: "60px",
          pr: "16px",
          pl: "16px",
          backgroundColor: "#fff",
          display: {
            md: "flex",
            lg: "none",
          },
          flexDirection: "row",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            mb: "1px",
            height: "100%",
            boxShadow: "0 8px 24px -8px rgba(0, 0, 0, .12)",
          }}
        >
          <Link href={"https://a1data.by/"}>
            <Image
              src={
                isProd ? "/dom_y_reki/img/a1logo.svg" : "/img/a1logo.svg"
              }
              // src={"/img/a1logo.svg"}
              alt={"logo"}
              width={38}
              height={42}
            />
          </Link>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#000",
              fontFamily: "A1Serif",
              fontSize: "18px",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            <IconButton aria-label="phone" size="large">
              <CallOutlinedIcon />
            </IconButton>
            <a href="tel:+375(29)600-02-25">+375(29)600-02-25</a>
          </Box>
          <Box
            sx={{
              width: "60px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} scrollTo={scrollTo} />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export { Header };
