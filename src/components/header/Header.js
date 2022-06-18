import React from "react";

import "../../App.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3>
          ATools<span>.</span>
        </h3>
      </div>
      <div className="btns">
      <button type="button" style={{"backgroundColor": "#00355b"}} className="btn btn-primary">Start Free Trial</button>
        {/* <div className="trial-btn">Start Free Trial</div> */}
        {/* <div className="login-btn">Login</div> */}
        <button type="button" className="btn btn-warning m-2">Login</button>
      </div>
    </div>
  );
};

export default Header;
