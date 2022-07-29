import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CardUsersSay } from "./CardUsersSay";
import { Carousel } from "./Carousel";
export const UsersSay = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    window.screen.availWidth < 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <Box
      sx={{
        mx: "auto",
        width: "100%",
        my: { xs: 15, md: 25 },
      }}
    >
      <Carousel>
        <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          {" "}
          <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />{" "}
          <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
          {isMobile ? (
            ""
          ) : (
            <CardUsersSay
              profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
              fullname={"Carla "}
              country={"UK"}
              stars={[1, 1, 1, 1]}
              description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
            />
          )}
        </Box>
        <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
          <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
        {isMobile ? (
            ""
          ) :   <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />}
        </Box>{" "}
        <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
          <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
        {isMobile ? (
            ""
          ) :   <CardUsersSay
            profilePicture="https://www.sleepiest.com/wp-content/uploads/2020/09/100x100_sleepiest_reviewer_2.jpg"
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />}
        </Box>
      </Carousel>
    </Box>
  );
};
