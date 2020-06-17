import React from "react";
import logo from "../img/instagram.png";

const Nav = (props) => {
  return (
    <header>
      <img src={logo} alt="instagram logo" />
      <input type="text" placeholder="Search" />
      <div>
        <span>home</span>
        <span>share</span>
        <span>explore</span>
        <span>activity</span>
        <span>user</span>
      </div>
    </header>
  );
};

export default Nav;
