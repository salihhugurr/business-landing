import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle, fontSize }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        fontSize={fontSize}
        color={theme.palette.secondary[300]}
        fontWeight="bold"
        sx={{ letterSpacing: "1px" }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" color={theme.palette.secondary[300]}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default Header;
