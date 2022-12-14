import React from "react";
import { Box } from "@mui/material";
import { ButtonTryForFree } from "../components/ButtonTryForFree";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

export const BedtimeStories = ({ title, description, img }) => {
  return (
    <Box
      sx={{
        py: { xs: "80px", md: "150px" },
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
          <Fade bottom>
            <h2>Sleep with bedtime stories</h2>
          </Fade>
        </Box>
        
          <h5 className="opacity--7" ><Fade bottom>
            {description}
        </Fade></h5>
        <Box
          sx={{ my: 5, mx: "auto", justifyContent: "center", display: "flex" }}
        >
          <Fade bottom>
            <ButtonTryForFree />
          </Fade>
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
            position: "relative",
            mx: "auto",
            width: { xs: "202px", sm: "215px" },
            height: { xs: "429", sm: "456px" },
          }}
        >
          <Fade bottom>
            <img src={img} width={"100%"} height={"100%"} />
          </Fade>

          <Box
            sx={{
              width: { xs: "77px", sm: "100px" },
              height: { xs: "77px", sm: "100px" },
              position: "absolute",
              top: "20%",
              left: { xs: "-40%", sm: "-70%" },
            }}
          >
            <Roll right>
              <img
                src={
                  "https://www.sleepiest.com/wp-content/uploads/2020/09/220x220_4@2x.png"
                }
                width={"100%"}
                height={"100%"}
              />
            </Roll>
          </Box>
          <Box
            sx={{
              width: { xs: "77px", sm: "100px" },
              height: { xs: "77px", sm: "100px" },
              position: "absolute",
              top: "70%",
              left: "100%",
            }}
          >
            <Roll left>
              <img
                src={
                  "https://www.sleepiest.com/wp-content/uploads/2020/09/344x344_5@2x.png"
                }
                width={"100%"}
                height={"100%"}
              />
            </Roll>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
