import React from "react";
import { Container, Typography, Link, Box, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <footer>
      <Box
        flexDirection={"column"}
        borderTop={1}
        p={"1rem"}
        sx={{
          borderColor: theme.palette.secondary[300],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap="1rem"
      >
        <Typography
          sx={{
            color: theme.palette.primary[200],
          }}
        >
          Peglad
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: theme.palette.primary[200],
            }}
          >
            Link 1
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary[200],
            }}
          >
            Link 2
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary[200],
            }}
          >
            Link 3
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary[200],
            }}
          >
            Link 4
          </Typography>
        </Box>
        <Typography
          sx={{
            color: theme.palette.primary[200],
          }}
        >
          Social Media Icons
        </Typography>
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
