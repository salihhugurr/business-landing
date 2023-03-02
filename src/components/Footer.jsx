import React from "react";
import {
  Container,
  Typography,
  Link,
  Box,
  useTheme,
  Stack,
  IconButton,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useTranslation } from "react-i18next";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import logo from "../assets/icon.svg";
import Partition from "./Partition";

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <footer>
      <Partition />
      <Box
        flexDirection={"column"}
        p={"1rem"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap="1rem"
      >
        <img
          src={logo}
          style={{
            height: 30,
            width: 30,
          }}
          alt="Peglad."
        />
        <Typography color={theme.palette.secondary[50]} fontSize={10}>
          {t("Address")}
        </Typography>
        <Stack direction="row">
          <IconButton
            href="https://www.instagram.com/pegladmedya/"
            target="_blank"
          >
            <Instagram />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
        </Stack>
        <Typography
          sx={{
            color: theme.palette.primary[50],
            fontSize: "10px",
          }}
        >
          {t("Copyright")}
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
