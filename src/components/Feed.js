import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
const Feed = () => {
  return (
    <Stack
      flexDirection={{ sx: "column", md: "row" }}
      bgcolor="black"
      color="white"
    >
      <Box
        height={{ sx: "auto", md: "92vh" }}
        px={{ sx: "0", md: "2" }}
        borderRight="1px solid #3d3d3d"
      >
        Side Bar
        <Typography className="copyright" variant="body2" mt="1.5">
          Copyright 2023 Asad Ali
        </Typography>
      </Box>
      <Box>Main</Box>
    </Stack>
  );
};

export default Feed;
