import React from "react";
import axios from "axios";
import { Typography, Button } from "@mui/material";

export const UserCard = ({ token, user, render, setRender }) => {
  console.log(user);
  const handleDelete = (userId) => {
    try {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setRender(render + 1);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Typography align="center"> {user.email}</Typography>
      <Typography variant="button" onClick={() => handleDelete(user._id)}>
        ❌
      </Typography>
    </div>
  );
};
