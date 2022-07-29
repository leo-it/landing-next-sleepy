import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardAlbum } from "./CardAlbum";
import CarouselAlbum from "./CarouselAlbum";

export const Albums = () => {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    console.log(window.screen.availWidth);
    window.screen.availWidth<800?setIsMobile(true):setIsMobile(false)
    }, [])
  
  return (
    <Box>
      <Box
        sx={{
          my: { xs: "60px", md: "100px" },
          maxWidth: { xs: "300px", md: "600px" },
          display: "flex",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <h2>
          Over 250+ sleep sounds, stories & meditations to help you{" "}
          <span className="albums__title--blue">sleep better </span>{" "}
        </h2>
      </Box>
      <Box>
        <CarouselAlbum perView={isMobile?2:4}>
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_clockmakers-watch_sleep.jpg" />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_cinderella_sleep.jpg" />
          </div>
        
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_kokos_wish_sleep.jpg" />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_clockmakers-watch_sleep.jpg" />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/09/336x222_yogic_sleep_sleep.jpg" />
          </div>
        </CarouselAlbum >
        <Box sx={{mt:5}}></Box>
        <CarouselAlbum perView={isMobile?2:4}>
        <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_kokos_wish_sleep.jpg" />
          </div>
          
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/09/336x222_yogic_sleep_sleep.jpg" />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_clockmakers-watch_sleep.jpg" />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_cinderella_sleep.jpg" />
          </div>
          
          <div className="keen-slider__slide ">
            <CardAlbum image="https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_clockmakers-watch_sleep.jpg" />
          </div>
        </CarouselAlbum>
      </Box>
    </Box>
  );
};
