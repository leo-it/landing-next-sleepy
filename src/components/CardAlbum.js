import { Box } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";

export const CardAlbum = ({ image }) => {
  return (
    <Box
      className="rotate--img"
      sx={{
        width: { xs: "220px", md: "300px" },
        height: { xs: "120px", md: "208px" },
      }}
    >
      <Fade bottom>
        <img src={image} width={"100%"} height={"100%"} />
      </Fade>
    </Box>
  );
};
