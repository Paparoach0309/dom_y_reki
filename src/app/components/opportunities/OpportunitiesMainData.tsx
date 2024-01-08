import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { opportunitiesBlocks } from "@/app/constants/dataConst";

function OpportunitiesMainData() {
  return (
    <Stack pt={{ md: "200px", xs: "80px" }} pb={{ md: "100px", xs: "80px" }} sx={{ background: "#FDFDFD" }}>
      <Container maxWidth={"lg"}>
        <Stack>
          <Typography
            variant={"sans-regular-24-14"}
            sx={{
              textAlign: "center",
              height: "52px",
              fontSize: {
                md: "24px",
                xs: "24px",
              },
              color: "#EB140A",
              fontWeight: "700",
              lineHeight: {
                md: "52px",
                xs: "32px",
              },
            }}
          >
            Как Security Awareness поможет вам защитить бизнес от киберугроз?
          </Typography>
        </Stack>
        <Box
          pt={{ md: "60px", xs: "80px" }}
          sx={{ display: "flex", flexWrap: "wrap", gap: "44px 34px" }}
        >
          {opportunitiesBlocks.map((i) => {
            return (
              <Box
                key={i.id}
                sx={{
                  gap: "25px",
                  px: "25px",
                  flex: "1 2 45%",
                  background: "#FFF",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant={"serif-bold-24-16"}
                  sx={{
                    textAlign: "center",
                    lineHeight: "32px",
                  }}
                >
                  {i.title}
                </Typography>
                <Typography
                  variant={"sans-regular-18"}
                  sx={{ maxWidth: "400px" }}
                >
                  {i.subtitle}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Stack>
  );
}

export default OpportunitiesMainData;
