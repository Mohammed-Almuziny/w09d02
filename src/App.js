import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import dotenv from "dotenv";
import "./App.css";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Todos } from "./pages/Todos";
import { AllTodos } from "./pages/AllTodos";
import { AllUsers } from "./pages/AllUsers";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

dotenv.config();

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/allTodos" element={<AllTodos />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
