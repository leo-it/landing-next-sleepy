import { Box } from "@mui/material";
import React from "react";

export const CardUsersSay = ({profilePicture, fullname, country, stars, description }) => {
  return (
    <Box
      className=""
      sx={{
        width: { xs: "265px", md: "358px" },
        height: { xs: "290px", md: "465px" },
        border: 1.4,
        color: "rgb(125, 125, 160)",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: { xs: "170px", md: "274px" },
          mt: { xs: "40px", md: "60px" },
          color: "white",
        }}
      >
        <Box sx={{display:"flex"}}>
        <Box sx={{mr:{xs:"15px",md:"20px"}, width:{xs:"50px",md:"50px"}, height:{xs:"50px",md:"50px"},}}>
            <img className="circle__border" src={profilePicture} width={"100%"} height={"100%"}/>
        </Box>
        <Box sx={{mt:{xs:1, md:0}}}>

        <h5>{fullname}</h5>
        <Box
          sx={{
            mb: { xs: "12px", md: "20px" },mt: { xs: "3px", md: "5px" },
          }}
        >
          <h5 className="opacity--7">{country}</h5>
        </Box>{" "}
        </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            my: { xs: "12px", md: "20px" },
          }}
        >
          {stars.map((image) => (
            <Box
              sx={{
                mr: { xs: "10px", md: "20px" },
                width: {
                  xs: "20px",
                  md: "26px",
                },
                height: { xs: "20px", md: "26px" },
              }}
            >
              <img
                src="https://www.sleepiest.com/assets/img/review/1.svg"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          ))}
          
        </Box>
        <h6 sx={{}}>{description}</h6>
      </Box>
    </Box>
  );
};
