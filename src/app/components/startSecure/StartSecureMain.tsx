"use client";
import React from "react";
import { Box, Button, Container, Stack, useMediaQuery } from "@mui/material";
import theme from "@/app/theme/theme";
import Image from "next/image";

function StartSecureMain() {
  const isProd = process.env.NODE_ENV === "production";
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  const handleScriptClick = () => {
    const script = document.getElementsByClassName(
      "b24-widget-button-inner-container"
    );
    // @ts-ignore
    script.item(0).click();
  };

  return (
    <>
      <Box
        id={"start_box"}
        sx={{
          height: { md: "calc(100vh)", sm: "740px", xs: "500px" },
          backgroundImage: {
            lg: `url(${isProd ? "/dom_y_reki" : ""}/img/backgroundlg.png)`,
            md: `url(${isProd ? "/dom_y_reki" : ""}/img/backgroundmd.png)`,
            sm: `url(${isProd ? "/dom_y_reki" : ""}/img/backgroundmd.png)`,
            xs: `url(${isProd ? "/dom_y_reki" : ""}/img/backgroundxs.png)`,
          },
          backgroundSize: {
            md: "100% 100%",
            xs: "100% 100%",
          },
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack
            direction={"column"}
            justifyContent={{ sm: "center", xs: "space-around" }}
            alignItems={{ sm: "start", xs: "center" }}
            py={{ md: 0, xs: 0 }}
            sx={{
              zIndex: 2,
              height: { md: "calc(100vh - 76px)", sm: "740px", xs: "500px" },
            }}
          >
            <Stack>
              <Box
                sx={{
                  fontFamily: "A1Serif-Regular",
                  width: {
                    md: "750px",
                    sm: "400px",
                    xs: "280px",
                  },
                  fontSize: {
                    lg: "64px",
                    md: "54px",
                    sm: "40px",
                    xs: "24px",
                  },
                  fontWeight: "700",
                  lineHeight: {
                    md: "64px",
                    sm: "54px",
                    xs: "24px",
                  },
                }}
              >
                Security Awareness: Защити свой бизнес изнутри
              </Box>
              <Box
                sx={{
                  mt: "20px",
                  width: {
                    md: "750px",
                    xs: "280px",
                  },
                  height: "48px",
                  fontSize: {
                    md: "18px",
                    xs: "14px",
                  },
                  fontWeight: "500",
                  lineHeight: "24px",
                  zIndex: 5,
                }}
              >
                Платформа, развивающая сотрудников в области кибербезопасности
              </Box>
            </Stack>
            <Button
              onClick={handleScriptClick}
              sx={{
                borderRadius: "8px",
                background: "#F00",
                color: "#fff",
                width: {
                  lg: "300px",
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
                mt: "45px",
                p: "16px 30px 16px 30px",
                zIndex: 3,
                "&:hover": {
                  background: "#F00",
                },
              }}
            >
              Получить консультацию
            </Button>
          </Stack>
          <Container
            style={{
              width: isLG ? 400 : isMD ? 220 : isSM ? 200 : 140,
              height: isLG ? 400 : isMD ? 220 : isSM ? 200 : 140,
            }}
          >
            <Image
              className={"fingerprint"}
              src={"/img/fingerprint.png"}
              alt={"fingerprint"}
              width={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              height={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              style={{
                position: "absolute",
                zIndex: 1,
                top: isLG ? "12lvh" : isMD ? "20lvh" : isSM ? "30lvh" : "31lvh",
                right: isLG
                  ? "12lvw"
                  : isMD
                  ? "15lvw"
                  : isSM
                  ? "20lvh"
                  : "4lvh",
                // ? "calc(calc(100vw/4) - 100px)"
                // : "calc(calc(100vw/2) - 150px)",
              }}
            />
            <Image
              className={"honeycombworld"}
              src={"/img/honeycombworld.png"}
              alt={"honeycombworld"}
              width={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              height={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              style={{
                position: "absolute",
                zIndex: 1,
                top: isLG ? "-16lvh" : isMD ? "2lvh" : isSM ? "12lvh" : "18lvh",
                right: isLG ? "5lvw" : isMD ? "8lvw" : isSM ? "10lvw" : "-6lvw",
              }}
            />
            <Image
              className={"honeycomb"}
              src={"/img/honeycomb.png"}
              alt={"honeycomb"}
              width={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              height={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              style={{
                position: "absolute",
                zIndex: 1,
                top: isLG ? "11lvh" : isMD ? "20lvh" : isSM ? "30lvh" : "31lvh",
                right: isLG
                  ? "-3lvw"
                  : isMD
                  ? "1lvw"
                  : isSM
                  ? "0lvh"
                  : "-10lvh",
              }}
            />
            <Image
              className={"honeycombshield"}
              src={"/img/honeycombshield.png"}
              alt={"honeycombshield"}
              width={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              height={isLG ? 400 : isMD ? 220 : isSM ? 200 : 150}
              style={{
                position: "absolute",
                zIndex: 2,
                top: isLG ? "39lvh" : isMD ? "39lvh" : isSM ? "48lvh" : "44lvh",
                right: isLG ? "5vw" : isMD ? "8lvw" : isSM ? "10lvw" : "-6lvw",
              }}
            />
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default StartSecureMain;
