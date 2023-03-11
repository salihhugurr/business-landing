import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import target from "../../assets/target.svg";
import services from "../../assets/services.svg";
import servicesEn from "../../assets/servicesEn.svg";
import ScrollTrigger from "react-scroll-trigger";
import CounterUp from "components/CounterUp";
import {
  TaskOutlined,
  MobileFriendlyOutlined,
  PsychologyAltOutlined,
  DesktopWindowsOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {Helmet} from "react-helmet"

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  const isNonMobile = useMediaQuery("(min-width: 600px");

  return (
    <Box flexDirection={"column"} sx={{ display: "flex", minHeight: "100%" }}>
      <Helmet>
        <title>{t("Home")}</title>
        <meta name={t("Home")} description="Anasayfa Açıklama"/>
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
          {!isNonMobile && (
            <Box sx={{ flex: 1 }}>
              <img
                src={target}
                alt="target"
                style={{
                  width: isNonMobile ? "90%" : "100%",
                  height: isNonMobile ? "90%" : "100%",
                }}
              />
            </Box>
          )}
          <Typography
            color={theme.palette.secondary[200]}
            textAlign="center"
            fontWeight={"bold"}
            fontSize={isNonMobile ? 40 : 20}
          >
            {t("Dream")}
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

        {isNonMobile && (
          <Box sx={{ flex: 1 }}>
            <img
              src={target}
              alt="target"
              style={{
                width: isNonMobile ? "90%" : "100%",
                height: isNonMobile ? "90%" : "100%",
              }}
            />
          </Box>
        )}
      </Box>

      {i18next.language === "tr" && (
        <img
          src={services}
          alt="services"
          style={{
            display: "flex",
            marginTop: "5px",
            alignSelf: "center",
            width: isNonMobile ? "60%" : "90%",
            height: isNonMobile ? "60%" : "90%",
          }}
        />
      )}
      {i18next.language !== "tr" && (
        <img
          src={servicesEn}
          alt="services"
          style={{
            display: "flex",
            marginTop: "5px",
            alignSelf: "center",
            width: isNonMobile ? "60%" : "90%",
            height: isNonMobile ? "60%" : "90%",
          }}
        />
      )}

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <Box
          margin={10}
          gap={isNonMobile ? 10 : 4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={isNonMobile ? 20 : 10}
            textAlign={"center"}
            flexDirection={"column"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexDirection={"column"}
            >
              <TaskOutlined
                sx={{
                  mb: isNonMobile ? "1rem" : "5px",
                  fontSize: isNonMobile ? 30 : 25,
                }}
              />
              {t("FinishedProject")}
            </Box>
            <CounterUp min={0} max={10} counterOn />
          </Typography>
          <Typography
            fontSize={isNonMobile ? 20 : 10}
            textAlign={"center"}
            flexDirection={"column"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexDirection={"column"}
            >
              <MobileFriendlyOutlined
                sx={{
                  mb: isNonMobile ? "1rem" : "5px",
                  fontSize: isNonMobile ? 30 : 25,
                }}
              />
              {t("MobileApp")}
            </Box>
            <CounterUp min={0} max={10} counterOn />
          </Typography>
          <Typography
            fontSize={isNonMobile ? 20 : 10}
            textAlign={"center"}
            flexDirection={"column"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexDirection={"column"}
            >
              <PsychologyAltOutlined
                sx={{
                  mb: isNonMobile ? "1rem" : "5px",
                  fontSize: isNonMobile ? 30 : 25,
                }}
              />
              {t("AIProject")}
            </Box>
            <CounterUp min={0} max={10} counterOn />
          </Typography>
          <Typography
            fontSize={isNonMobile ? 20 : 10}
            textAlign={"center"}
            flexDirection={"column"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              flexDirection={"column"}
            >
              <DesktopWindowsOutlined
                sx={{
                  mb: isNonMobile ? "1rem" : "5px",
                  fontSize: isNonMobile ? 30 : 25,
                }}
              />
              {t("FinishedWeb")}
            </Box>
            <CounterUp min={0} max={10} counterOn />
          </Typography>
        </Box>
      </ScrollTrigger>
    </Box>
  );
};

export default Home;
