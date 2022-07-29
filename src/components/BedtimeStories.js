import React from "react";
import { Box } from "@mui/material";
import { ButtonTryForFree } from "./ButtonTryForFree";

export const BedtimeStories = () => {
  return (
    <Box
      sx={{
        mt: { xs: "80px", md: "160px" },
        display: { sm: "flex" },
        mx: "auto",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          justifyContent: "center",
          maxWidth: { xs: "320px", md: "300px" },
        }}
      >
        <Box sx={{ mb: { xs: 3, md: 6 } }}>
          <h2>Sleep with bedtime stories</h2>{" "}
        </Box>
        <h5 className="opacity--7">
          Our selection of bedtime stories range from classics such as;
          ‘Cinderella’ and ‘Sherlock Holmes’ to Sleepiest Originals such as ‘The
          Adventures of Koko', 'The Wise Elephant' and 'The Jupiter Twins'.
        </h5>
        <Box sx={{my:5, mx:"auto",justifyContent: "center", display:"flex"}}>

        <ButtonTryForFree />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "320px", md: "410px" },
          display: { sm: "flex" },
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            width: { xs: "202px", sm: "215px" },
            height: { xs: "429", sm: "456px" },
          }}
        >
          <img
            src={
              "https://www.sleepiest.com/wp-content/uploads/2020/09/478x1016_1@2x-2-1.png"
            }
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
    </Box>
  );
};
