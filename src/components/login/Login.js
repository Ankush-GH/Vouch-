import React from "react";

import BG from "../../assets/bgImage.jpg";
import "../../App.scss";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div className="login">
      <div className="left">
        <LoginForm />
      </div>

      <img src={BG} alt="Background" />
    </div>
  );
};

export default Login;
