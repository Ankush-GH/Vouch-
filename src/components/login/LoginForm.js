import React, { useState } from "react";

import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
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
        console.log(res.data);
        alert("Successfully Logged In!! (check token on console)");
      })
      .catch((err) => {
        console.log(err.request.response);
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

        {/* <div id="inputEmail" className="input-group mb-3 w-75">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          value={email}
          onChange={emailHandler}
          type="text"
          className="form-control"
          placeholder="Email Address*"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div> */}

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
              for="flexCheckDefault"
            >
              Remember Password
            </label>
          </div>
          <div className="fpass">Forgot Password?</div>
        </div>
      </form>
      {/* <div className="message">

      </div> */}
    </>
  );
};

export default LoginForm;
