import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Partition = ({ title, subtitle, fontSize }) => {
  const theme = useTheme();

  return (
    <Box
      width={"100%"}
      sx={{
        backgroundColor: theme.palette.secondary[300],
        border: 1,
        borderColor: theme.palette.secondary[300],
      }}
    />
  );
};

export default Partition;
