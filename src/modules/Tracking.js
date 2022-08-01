import { Box } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";

export const Tracking = () => {
  return (
    <Box
      sx={{
        position: "relative",
        mt: { xs: "100px" },
        display: { sm: "flex" },
        mx: "auto",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "70%", mx: "auto" }}>
        <Box
          sx={{
            display: { xs: "flex" },
            mx: "auto",
            justifyContent: "center",
            mb: { xs: "12px", md: "40px" },
          }}
        >
          <Fade bottom>
            <h2>Sleep tracking</h2>
          </Fade>
        </Box>
        <Box>
          <Box
            sx={{
              display: { sm: "flex" },
              mx: "auto",
              justifyContent: "center",
            }}
          >
            <h5 className="opacity--7 text__center">
              <Fade bottom>
                New from the sleep lap our sleep analysis will give you insights
                into what's happening within your sleep cycle, helping to
                identify how much time you spend in light, rem and deep sleep
                throughout the night. Celebrate your Sleepiest success with
                weekly sleep reports.{" "}
              </Fade>
            </h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: { md: "flex" },
           
          }}
        >
          <Box
            sx={{
              justifyContent: "right",
              mt: 4,
              width: { xs: "280px", md: "320px" },
              height: { xs: "390px", md: "445px" },
            }}
          >
            {" "}
            <img
              src={"https://www.sleepiest.com/assets/img/track/1@2x.png"}
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              pt: { md: 10 },
              mx:1,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <img
                src={"https://www.sleepiest.com/assets/img/track/2@2x.png"}
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <img
                src={"https://www.sleepiest.com/assets/img/track/4@2x.png"}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
            }}
          >
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <img
                src={"https://www.sleepiest.com/assets/img/track/3@2x.png"}
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <img
                src={"https://www.sleepiest.com/assets/img/track/5@2x.png"}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
