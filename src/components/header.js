import React from "react";
import { Link } from "react-router-dom";
import { ProductPage } from "../Product";

const Headerstyle = {
  padding: "1.5vw",
  fontSize: "1.8vw",
  width: 952,
  fontFamily: "源ノ角ゴシック JP,ヒラギノ角ゴ Pro",
  fontWeight: "bold",
  color: "white",
  textDecoration: "none",
};

const HeaderMenu = ({ children }) => (
  <div>
    <div
      className="header-position"
      style={{
        position: "absolute",
        top: "2.2vw",
        right: 20,
        fontFamily: "ヒラギノ角ゴ Pro",
      }}
    >
      <Link to="/" className="headerstyle2" style={Headerstyle}>
        Home
      </Link>
      <Link to="/About" className="headerstyle2" style={Headerstyle}>
        About
      </Link>
      <Link to="/Works" className="headerstyle2" style={Headerstyle}>
        Works
      </Link>
      <Link to="/News" className="headerstyle2" style={Headerstyle}>
        News
      </Link>
      <a
        href="https://blog.opuappnavi.com/"
        target="blank"
        className="headerstyle2"
        style={Headerstyle}
      >
        Blog
      </a>
      <Link to="/Contact" className="headerstyle2" style={Headerstyle}>
        Contact
      </Link>
    </div>
    {children}
  </div>
);

export default HeaderMenu;
