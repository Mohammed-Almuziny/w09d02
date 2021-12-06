import React from "react";
import { Link, IconButton, Button } from "@mui/material";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

export const RightSide = ({ user, setUser, setToken, role, setRole }) => {
  const handleLogOut = () => {
    localStorage.clear();
    setUser();
    setToken();
    setRole();
  };

  console.log(role);
  return role === "admin" ? (
    <>
      <Link color="inherit" underline="none" href="/" mr={2}>
        home
      </Link>
      <Link color="inherit" underline="none" href="/todos" mr={2}>
        todos
      </Link>
      <Link color="inherit" underline="none" href="/allTodos" mr={2}>
        all todos
      </Link>
      <Link color="inherit" underline="none" href="/allUsers" mr={2}>
        all users
      </Link>
    </>
  ) : (
    <>
      <Link color="inherit" underline="none" href="/" mr={2}>
        home
      </Link>
      <Link color="inherit" underline="none" href="/todos" mr={2}>
        todos
      </Link>
    </>
  );
};
