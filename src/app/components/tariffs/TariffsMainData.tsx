"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import CustomTariffSlider from "../slider/CustomTariffSlider";
import theme from "@/app/theme/theme";
import AwesomeTariffItem from "./AwesomeTariffItem";
import PhishingTariffItem from "./PhishingTariffItem";

const TabPanel = ({ children, value, index }: any) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const TariffsMainData = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isMD = useMediaQuery(theme.breakpoints.up("md"));

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
            <Grid
              item
              container
              md={3}
              lg={2.5}
              sx={{
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Grid item id="tariffPrevArrow"></Grid>
              <Grid item id="tariffNextArrow"></Grid>
            </Grid>
            <Grid sx={{ width: "100%" }}>
              <Grid>
                <Tabs
                  sx={{
                    "& .MuiTabs-flexContainer": {
                      justifyContent: "center",
                    },
                    "& .MuiTab-root": {
                      width: { md: "196px", xs: "144px" },
                    },
                    "& .Mui-selected": {
                      color: "#DA291C !important",
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "red",
                      position: "absolute",
                      height: "5px",
                      bottom: "40px",
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                >
                  <Tab
                    sx={{
                      fontFamily: "A1Sans",
                      fontSize: { md: "18px", xs: "12px" },
                      fontWeight: 500,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#B3B3B3",
                    }}
                    label="Security Awereness"
                  />
                  <Tab
                    sx={{
                      fontFamily: "A1Sans",
                      fontSize: { md: "18px", xs: "12px" },
                      fontWeight: 500,
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#B3B3B3",
                    }}
                    label="Phishing"
                  />
                </Tabs>
              </Grid>
              <TabPanel value={value} index={0}>
                <AwesomeTariffItem />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid
                  sx={{
                    "& .slick-slide > div": {
                      margin: { sm: "0 6px", md: "0 12px" },
                    },
                    "& .slick-list": {
                      height: { md: "520px" },
                      padding: "0 10% 0 0 !important",
                      margin: { sm: "0 -6 px", md: "0 -12px" },
                    },
                    "& .slick-dots ": {
                      marginTop: 2,
                    },
                    "& .slick-dots li": {
                      margin: { xs: "0px 10px", md: "0px 20px" },
                    },
                    "& .slick-dots li button:before": {
                      opacity: "1",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "3px",
                      width: { xs: "28.5", md: "38px" },
                      margin: { xs: "10px", md: "20px" },
                      height: "8px",
                      content: '""',
                    },
                    "& .slick-dots li.slick-active button:before": {
                      backgroundColor: "red",
                    },
                  }}
                >
                  {isMD === true ? (
                    <CustomTariffSlider />
                  ) : (
                    <PhishingTariffItem />
                  )}
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default TariffsMainData;
