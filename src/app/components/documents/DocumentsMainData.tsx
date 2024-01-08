"use client";

import React, { FC } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Icon } from "@/app/components/Icon";
import { documentData } from "@/app/constants/dataConst";
import { useState } from "react";
import { IDocumentData } from "@/app/types/orderTypes";
import Image from "next/image";

const DocumentItem: FC<{ data: IDocumentData }> = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const isProd = process.env.NODE_ENV === "production";

  const handleOpen = () => {
    if (data.src) {
      window.open(`${isProd ? "/dom_y_reki" + data.src : data.src}`, "_blank");
      setClicked(true);
    }
  };

  return (
    <Stack
      direction={"row"}
      spacing={2}
      onClick={handleOpen}
      sx={{
        flex: "1 1 25%",
        paddingTop: "30px",
        minWidth: "300px",
        "&.clicked": {
          opacity: "0.5",
          cursor: "default",
        },
        "&:hover": {
          cursor: "pointer",
          color: "#EB4A3B",
        },
      }}
      className={clicked ? "clicked" : ""}
    >
      {/* <Icon icon={'documents'} size={'95px'} /> */}
      <Image
        src={`/img/download.png`}
        alt={"download"}
        width={96}
        height={96}
      />
      <Stack justifyContent={"space-between"}>
        <Typography
          variant={"sans-bold-16-14"}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {data.title}
        </Typography>
        <Typography>{data.count}</Typography>
      </Stack>
    </Stack>
  );
};

const DocumentsMainData = () => {
  return (
    <Stack py={{ lg: "200px", xs: "100px" }} sx={{ background: "#FDFDFD" }}>
      <Container maxWidth={"xl"}>
        <Typography variant={"sans-bold-40-24"}>Документы</Typography>
        <Box
          sx={{
            display: "flex",
            paddingTop: "30px",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {documentData.map((i) => (
            <DocumentItem key={i.id} data={i} />
          ))}
        </Box>
      </Container>
    </Stack>
  );
};

export default DocumentsMainData;
