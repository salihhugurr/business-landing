import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import office from "../../assets/office.svg";
import teamDark from "../../assets/teamDark.svg";
import team from "../../assets/team.svg";
import {Helmet} from "react-helmet"

import { useTranslation } from "react-i18next";

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width: 600px");

  return (
    <Box flexDirection={"column"} sx={{ display: "flex", minHeight: "100%" }}>
      <Helmet>
        <title>{t("About")}</title>
        <meta name={t("About")} description="Peglad hakkında"/>
      </Helmet>
      <Box
        m={5}
        sx={{
          display: isNonMobile ? "flex" : "block",
          justifyContent: "space-between",
        }}
      >
        <Box
          flexDirection={"column"}
          sx={{
            display: "flex",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color={theme.palette.secondary[200]}
            textAlign="center"
            fontWeight={"bold"}
            fontSize={isNonMobile ? 40 : 20}
          >
            {t("About")}
          </Typography>
          <Typography
            color={theme.palette.secondary[50]}
            textAlign="center"
            fontSize={isNonMobile ? 16 : 12}
            marginTop={2}
          >
            Lorem ipsum dolor sit amet. Nam optio nisi aut facilis fugit et
            molestias sapiente eos internos sint. Sed accusamus doloribus ut
            quidem quibusdam ut ipsum quibusdam! Est voluptatibus debitis eum
            libero nobis sed commodi harum non soluta iusto. Et numquam
            voluptatem id minima voluptas a enim ipsa quo iusto deserunt ea
            excepturi adipisci. Qui natus deleniti qui deserunt vero ut laborum
            quae. Non quod facilis et voluptatem consequatur in laborum quis in
            esse nobis vel dolores harum aut fuga consequatur ut iusto facere?
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <img
          src={office}
          alt="office"
          style={{
            width: isNonMobile ? "40%" : "70%",
            height: isNonMobile ? "40%" : "70%",
          }}
        />
      </Box>

      <Box
        m={5}
        sx={{
          display: isNonMobile ? "flex" : "block",
          justifyContent: "space-between",
        }}
      >
        <Box
          flexDirection={"column"}
          sx={{
            display: "flex",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color={theme.palette.secondary[100]}
            textAlign="center"
            fontWeight={"bold"}
            fontSize={isNonMobile ? 30 : 15}
          >
            {t("Quality")}
          </Typography>
          <Typography
            color={theme.palette.secondary[50]}
            textAlign="center"
            fontWeight="bold"
            letterSpacing={.5}
            fontSize={isNonMobile ? 14 : 12}
            marginTop={2}
          >
            {t("QualityDesc")}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: isNonMobile ? "flex" : "block",
          justifyContent: "space-between",
        }}
      >
        <Box
          flexDirection={"column"}
          sx={{
            display: "flex",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color={theme.palette.secondary[100]}
            textAlign="center"
            fontWeight={"bold"}
            fontSize={isNonMobile ? 30 : 15}
          >
            {t("Team")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: "center",
            }}
          >
            {theme.palette.mode === "dark" ? (
              <img
                src={teamDark}
                alt="teamDark"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <img
                src={team}
                alt="team"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
