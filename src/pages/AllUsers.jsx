import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";

import { UserCard } from "./../components/UserCard";

export const AllUsers = ({ user, token }) => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(0);

  const getTodos = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/allUsers`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setUsers(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) getTodos();
    console.log(users);
  }, []);

  useEffect(() => {
    console.log(render);
    getTodos();
  }, [render]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Container>
      {users.map((user) => (
        <UserCard
          token={token}
          user={user}
          render={render}
          setRender={setRender}
          key={user._id}
        />
      ))}
    </Container>
  );
};
