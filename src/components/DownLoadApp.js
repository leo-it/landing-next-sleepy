import { Box, Typography } from "@mui/material";
import React from "react";
import { ButtonAppStore } from "./ButtonAppStore";

export const DownLoadApp = () => {
  return (
    <Box sx={{ position: "relative", height:"220vh" }}>
      <Box class="downloadapp__bg">
        <Box
          sx={{
            position: "absolute",
            height: { xs: "200vh", md: "100vw" },
          }}
        >
          <img
            className="downloadapp__image__bg"
            src="https://www.sleepiest.com/assets/img/hero/1@1.5x.png"
            alt="background"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: { xs: "200vh", md: "100vw" },
          }}
        >
          <img
            className="downloadapp__image__bg"
            src="https://www.sleepiest.com/assets/img/hero/2@1.5x.png"
            alt="background"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: { xs: "200vh", md: "100vw" },
          }}
        >
          <img
            className="downloadapp__image__bg"
            src="https://www.sleepiest.com/assets/img/hero/3.png"
            alt="background"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
      <Box
        className="downloadapp__text__box"
        sx={{
          position: "absolute",
          display: "flex",
          width: {xs:"100%",sm:"100%"},
          mt: { xs: "20vh", md: "30vh" },
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <h1>The Sleepi App</h1>
          <Box sx={{ width: "380px", mt: "20px", mx: "auto" }}>
            <h3 className="text__gray">
              Can't sleep? Try bedtime stories, sleep sounds & meditations to
              help you fall asleep fast.{" "}
            </h3>
            <Box className="downloadapp__img__box" sx={{ mt: "20px", mx: "auto", display: "flex" }}>
              <ButtonAppStore />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
