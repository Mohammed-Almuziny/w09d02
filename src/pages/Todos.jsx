import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";

import { TodoCard } from "./../components/TodoCard";
import { AddTodo } from "./../components/AddTodo";

export const Todos = ({ user, token }) => {
  const [todos, setTodos] = useState([]);
  const [render, setRender] = useState(0);

  const getTodos = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/todos`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setTodos(result.data);
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
  }, []);

  useEffect(() => {
    console.log(render);
    getTodos();
  }, [render]);

  return user ? (
    <Container>
      {todos.map((todo) => (
        <TodoCard
          token={token}
          todo={todo}
          render={render}
          setRender={setRender}
          key={todo._id}
        />
      ))}
      <AddTodo token={token} render={render} setRender={setRender} />
    </Container>
  ) : (
    <Typography>you have to log in</Typography>
  );
};
