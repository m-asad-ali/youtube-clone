import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "black",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        {/* <Typography variant="h6" color="red">
          Youtube By Asad
        </Typography> */}
      </Link>
      <SearchBar />
      <Box></Box>
    </Stack>
  );
};

export default Navbar;
