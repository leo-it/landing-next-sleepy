import React from "react";
import { Box, Typography } from "@mui/material";

export const CardBenefit = ({ image, title, text }) => {
  return (
    <Box sx={{ maxWidth:{xs:"240px", md:"290px"}}}>
      <Box
        sx={{
          width: { xs: "70px", md: "95px" },
          height: { xs: "70px", md: "95px" },
          mb:"40px"
        }}
      >
        <img src={image} width={"100%"} height={"100%"} />
      </Box>
      <Box sx={{mb:"30px"}}>
        <h4 >{title}</h4>
      </Box>
      <Box  > <h5 className="text__gray">{text}</h5></Box>
    </Box>
  );
};
