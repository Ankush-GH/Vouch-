import React, { useState } from "react";

import axios from "axios";

const LoginForm = () => {
  // to handle the email input
  const [email, setEmail] = useState("");
  // to handle the password input
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("SUBMITTED FORM");
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res.data.token);
        alert(`Your token is ${res.data.token}`);
      })
      .catch((err) => {
        // console.log(err.request.response);
        alert(err.request.response);
      });
  };

  return (
    <>
      <form onSubmit={submitHandler} className="loginform">
        <div className="heading">
          <h1>Welcome Back</h1>
        </div>
        <h6>Sub-title text goes here</h6>

        <input
          value={email}
          onChange={emailHandler}
          className="input-email"
          type="email"
          name="email"
          placeholder="Email Address*"
        />
        <input
          value={password}
          onChange={passwordHandler}
          className="input-password"
          type="password"
          name="password"
          placeholder="Password*"
        />

        <button className="login-BTN">Login</button>

        <div className="bottom">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label"
              style={{ color: "#00355b" }}
              htmlFor="flexCheckDefault"
            >
              Remember Password
            </label>
          </div>
          <div className="fpass">Forgot Password?</div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
