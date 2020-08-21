import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // to store state
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const login = (e) => {
    e.preventDefault();
  };
  // make a post request to retrieve a token from the api
  axiosWithAuth()
    .post("/api/login", credentials)
    .then((res) => {
      console.log("res value: ", res);
      // to save the token to localStorage
      localStorage.setItem("token", res.data.payload);
      // to redirect to BubblePage
      props.history.push("/bubblepage");
    })
    .catch((err) => {
      console.log("error:", err);
    });

  // to update the state when values change

  const handleChange = (e) => {
    console.log("handling change");
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
