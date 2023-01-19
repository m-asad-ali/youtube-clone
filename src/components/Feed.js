import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SideBar, Videos } from "./";

const Feed = () => {
  return (
    <Stack
      flexDirection={{ sx: "column", md: "row" }}
      bgcolor="black"
      color="white"
    >
      <Box
        height={{ sx: "auto", md: "auto" }}
        px={{ sx: "0", md: "2" }}
        borderRight="1px solid #3d3d3d"
      >
        <SideBar />
        <Typography className="copyright" variant="body2" mt="1.5">
          Copyright 2023 Asad Ali
        </Typography>
      </Box>

      <Box p={2} overflowY="auto" flex={2} height="90vh">
        <Typography variant="h4" fontWeight="bold" mb={2}>
          New <span style={{ color: "#fc1503" }}>Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
