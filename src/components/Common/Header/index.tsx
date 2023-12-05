import React from "react";
import "./style.css";
import Button from "../../Button";
import logo from "../../../assets/Group 187.png";

const Header = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="header_div">
      <div className="img_div" onClick={handleClick}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="btn_div">
        <Button onClick={handleButtonClick} label="Clone now" />
      </div>
    </div>
  );
};

export default Header;
