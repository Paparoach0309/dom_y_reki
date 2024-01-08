import React from "react";
import { advantagesData } from "@/app/constants/dataConst";
import { Grid } from "@mui/material";
import AdvantagesItem from "@/app/components/info/advantages/AdvantagesItem";

const AdvantagesItems = () => {
  return (
    <Grid container alignItems={"center"} columns={12} item xs={8}>
      {advantagesData.map((i) => {
        return (
          <Grid key={i.id} item md={6} xs={12}>
            <AdvantagesItem item={i} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AdvantagesItems;
