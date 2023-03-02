import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
function CounterUp({ min, max, counterOn }) {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        flex: 1,
      }}
    >
      <Typography
        color={theme.palette.secondary[300]}
        textAlign="center"
        sx={{ mt: "2px" }}
        fontSize={isNonMobile ? 30 : 20}
      >
        {counterOn && <CountUp start={min} end={max} duration={2} delay={0} />}+
      </Typography>
    </Box>
  );
}

export default CounterUp;
