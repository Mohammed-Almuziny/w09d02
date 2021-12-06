import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, IconButton, Button } from "@mui/material";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

import { logout } from "./../../reducers/account";

export const RightSide = ({ setUser, setToken, setRole }) => {
  const { user } = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    setUser();
    setToken();
    setRole();
    dispatch(logout({}));
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
