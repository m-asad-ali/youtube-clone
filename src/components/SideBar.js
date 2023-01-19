import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = () => {
  const selectedCategory = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "atuo",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((el) => (
        <button
          className="category-btn"
          style={{
            color: "white",
            backgroundColor: selectedCategory === el.name && "#FC1503",
          }}
        >
          <span
            style={{
              color: selectedCategory === el.name ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {el.icon}
          </span>
          <span style={{ opacity: selectedCategory === el.name ? "1" : "0.8" }}>
            {el.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
