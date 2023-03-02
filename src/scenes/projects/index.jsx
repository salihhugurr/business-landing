import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import project1 from "../../assets/project1.svg";
import project2 from "../../assets/project2.svg";
import project3 from "../../assets/project3.svg";
import project4 from "../../assets/project4.svg";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width: 600px");

  const allProjects = [
    {
      name: t("proj1Name"),
      pic: project1,
      desc: t("proj1Desc"),
    },
    {
      name: t("proj2Name"),
      pic: project2,
      desc: t("proj2Desc"),
    },
    {
      name: t("proj3Name"),
      pic: project3,
      desc: t("proj3Desc"),
    },
    {
      name: t("proj4Name"),
      pic: project4,
      desc: t("proj4Desc"),
    },
  ];

  return (
    <Box flexDirection={"column"} sx={{ display: "flex", minHeight: "100%" }}>
      {allProjects.map((item, index) => (
        <Box
          flexDirection={"column"}
          marginY={5}
          gap={4}
          sx={{ display: "flex" }}
        >
          <Typography
            color={theme.palette.secondary[200]}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={isNonMobile ? 20 : 14}
            marginTop={2}
          >
            {item.name}
          </Typography>

          <Box
            flexDirection={"row"}
            sx={{
              display: isNonMobile ? "flex" : "block",
              justifyContent: "space-around",
            }}
          >
            {index % 2 === 0 && (
              <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
                <img
                  src={item.pic}
                  alt={`${item.pic}`}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                />
              </Box>
            )}
            <Box sx={{ display: "flex", flex: 1.5, justifyContent: "center" }}>
              <Typography
                color={theme.palette.secondary[50]}
                textAlign="center"
                alignSelf={"center"}
                width={"85%"}
                marginY={!isNonMobile ? 4 : 0}
                fontSize={isNonMobile ? 16 : 12}
                marginTop={2}
              >
                {item.desc}
              </Typography>
            </Box>

            {index % 2 !== 0 && (
              <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
                <img
                  src={item.pic}
                  alt={`${item.pic}`}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
