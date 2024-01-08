"use client";
import { Container, Paper, Stack, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Icon } from "@/app/components/Icon";

function ScenarioMainData() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 3 } },
  };

  const scrollTo = () => {
    const yOffset = 0;
    const element = document?.getElementById("result-form");
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - yOffset;

    window.scrollTo({ top: y || 0, behavior: "smooth" });
  };

  return (
    <div ref={ref} style={{ overflowX: "hidden" }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Paper
          id="scenario_box"
          sx={{
            padding: {
              md: "34px, 120px, 34px, 120px",
              xs: "13px, 57px, 13px, 57px",
            },
            height: { md: "412px", xs: "182px" },
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            position: "relative",
            background: "linear-gradient(to bottom, #E9342B, #A90800)",
          }}
        >
          <Container maxWidth="md">
            <Stack
              py={{ md: "auto", xs: "50px" }}
              display="flex"
              alignItems="center"
            >
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{ textAlign: "center" }}
              >
                <Typography variant={"serif-bold-52-70"}>
                  Не идите на компромисс в защите своего бизнеса
                </Typography>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Stack
                  onClick={scrollTo}
                  direction={"row"}
                  spacing={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    width: { md: "364px", xs: "288px" },
                    height: { md: "60px", xs: "50px" },
                    padding: { md: "18px 28px", xs: "8px 10px" },
                    marginTop: { md: "60px", xs: "23px" },
                    borderRadius: "10px",
                    border: "2px solid #FFF",
                    background: "#FFF",
                    color: "#000",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant={"sans-bold-20-26"}
                    sx={{
                      "&:hover": {
                        color: "rgb(252, 28, 35)",
                      },
                    }}
                  >
                    Оставить заявку
                  </Typography>
                  <Icon
                    icon={"right-2"}
                    size={32}
                    style={{ marginTop: "3px" }}
                  />
                </Stack>
              </motion.div>
            </Stack>
          </Container>
        </Paper>
      </motion.div>
    </div>
  );
}
export default ScenarioMainData;
