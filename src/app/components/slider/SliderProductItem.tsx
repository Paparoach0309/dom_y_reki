import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const SliderProductItem = ({
  title,
  person,
  position,
  icon,
}: {
  title: string;
  person: string;
  position: string;
  icon: string;
}) => {
  return (
    <Grid
      container
      spacing={2}
      display={"grid"}
      sx={{
        display: "flex",
        height: { md: "240px" },
        px: "32px 30px",
      }}
      columnSpacing={{ xs: 1, sm: 2, md: 14 }}
      //   direction={{ md: "column", xs: "row" }}
    >
      <Grid
        item
        xs={8}
        md={3}
        sx={{ display: { md: "flex", xs: "none" }, flexDirection: "column" }}
      >
        <Image
          src={icon}
          alt={"client"}
          width={224}
          height={224}
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <Box>
          <Typography variant={"sans-regular-20-12"}
            sx={{
              // fontFamily: "Roboto",
              fontSize: { md: "24px", xs: "14px" },
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Grid container mt={3}>
            <Grid item xs={6} md={1}>
              <Image
                src={`/img/quote.png`}
                alt={"quote"}
                width={42}
                height={37}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <Typography
                style={{
                  fontFamily: "A1Sans",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "26px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                {person}
              </Typography>
              <Typography
                style={{
                  fontFamily: "A1Sans",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                {position}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
    // <Grid
    //   item
    //   container
    //   sx={{
    //     display: "flex",
    //     height: { md: "240px" },
    //     px: "32px 30px",
    //   }}
    // >
    //   <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
    //     <Stack
    //       direction={"row"}
    //       alignItems={"start"}
    //       justifyContent={"space-between"}
    //     >
    //       <Box
    //         sx={{
    //           pt: 16,
    //           width: 224,
    //           height: 224,
    //           background: "linear-gradient(to bottom, #E9342B, #A90800)",
    //         }}
    //       ></Box>
    //       <Box>
    //         <Typography
    //           style={{
    //             color: "var(--text-styles-headings-dark, #0D0D0D)",
    //             fontFamily: "A1Sans",
    //             fontSize: "24px",
    //             fontWeight: "400",
    //             lineHeight: "32px",
    //             letterSpacing: "0em",
    //             textAlign: "left",
    //           }}
    //         >
    //           {title}
    //         </Typography>
    //         <Typography style={{ fontSize: "14px" }}>{person}</Typography>
    //       </Box>
    //     </Stack>
    //   </Grid>
    // </Grid>
  );
};

export default SliderProductItem;
