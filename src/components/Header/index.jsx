import React from "react";
import { AppBar, Typography, Box, Toolbar } from "@mui/material";

import { RightSide } from "./RightSide";
import { LeftSide } from "./LeftSide";

export const Header = () => {
  return (
    <header className="App">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" mr={2}>
              TodosSite
            </Typography>

            <LeftSide />

            <Typography sx={{ flexGrow: 1 }}></Typography>

            <RightSide />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
