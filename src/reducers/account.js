const instiaiState = {
  user: "",
  token: "",
};

const account = (state = instiaiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { user, token, role } = payload;
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      return { user, token, role };
    case "LOGOUT":
      localStorage.clear();
      return { user: "", token: "", role: "" };
    default:
      return state;
  }
};

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logout = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};

export default account;
