import React from "react";
import { Grid, Typography } from "@mui/material";
import AdvantagesItems from "@/app/components/info/advantages/AdvantagesItems";

const AdvantagesMain = () => {
  return (
    <Grid
      container
      direction={{ md: "row", xs: "column" }}
      alignItems={{ md: "center", xs: "left" }}
      justifyContent={"space-between"}
    >
      <Grid item my={"30px"}>
        <Typography variant={"sans-bold-40-24"}>
          Почему Security <br /> Awareness?
        </Typography>
      </Grid>
      <AdvantagesItems />
    </Grid>
  );
};

export default AdvantagesMain;
