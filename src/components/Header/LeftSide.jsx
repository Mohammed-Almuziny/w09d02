import React from "react";
import { Link, IconButton, Button } from "@mui/material";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

export const LeftSide = ({ user, setUser, setToken, setRole }) => {
  const handleLogOut = () => {
    localStorage.clear();
    setUser();
    setToken();
    setRole();
  };

  return user ? (
    <>
      <h1>{user} </h1>

      <Button color="inherit" onClick={handleLogOut}>
        log out
      </Button>
    </>
  ) : (
    <>
      <Link color="inherit" underline="none" href="/register" ml={2}>
        Register
      </Link>

      <Link color="inherit" underline="none" href="/logIn" ml={2}>
        Log in
      </Link>
    </>
  );
};
