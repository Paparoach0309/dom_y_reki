import React from "react";
import { Stack, Typography } from "@mui/material";
import ResultUserData from "@/app/components/result/ResultUserData";
import { useAppSelector } from "@/app/store/hooks";

const ResultBody = () => {
  const { isFormSend } = useAppSelector((state) => state.dataSlice);
  return (
    <Stack
      maxWidth={"md"}
      direction={{ md: "row", sm: "column" }}
      spacing={{ md: 3, xs: 3 }}
      px={{ lg: "40px", xs: "15px" }}
      useFlexGap
      flexWrap={"wrap"}
      sx={{
        borderRadius: "9.216px",
        background: { xs: "none", lg: "rgba(255, 255, 255, 0.32)" },
        boxShadow: {
          xs: "none",
          lg: "0px 0px 9.216282844543457px 0px rgba(0, 0, 0, 0.13), 8.294654846191406px 7.373026371002197px 3.6865131855010986px 0px rgba(255, 255, 255, 0.44) inset",
        },
        backdropFilter: { xs: "none", lg: "blur(6.912212371826172px)" },
        paddingTop: "46px",
        paddingBottom: "30px",
        marginTop: { xs: "none", lg: "-15px" },
        marginLeft: { xs: "none", lg: "200px" },
      }}
    >
      {isFormSend ? (
        <Stack
          sx={{
            minHeight: 300,
            justifyContent: "center",
            alignItems: "center",
            width: 1,
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 24, md: 40 }, fontFamily: "A1Sans-Bold" }}
          >
            Заявка принята, спасибо!
          </Typography>
        </Stack>
      ) : (
        <ResultUserData />
      )}
    </Stack>
  );
};

export default ResultBody;
