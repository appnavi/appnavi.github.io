import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../images/logo.png";

const FooterStyle = {
  fontSize: "1.5vw",
  fontFamily: "ヒラギノ角ゴ Pro",
  color: "white",
  textDecoration: "none",
  padding: "1.0vw",
  paddingLeft: "2.0vw",
};

const FooterSize = {
  backgroundColor: "black",
  width: "100%",
  height: 80,
  paddingTop: "4.0vw",
  paddingBottom: "0.0vw",
};

const FooterContainer = {
  width: "90%",
  margin: " 0 auto",
  display: "flex",
};

const FooterLogoSize = {
  height: "6.9vw",
  width: "6.6vw",
  position: "relative",
  bottom: "0.6vw",
  left: "0vw",
};

const FooterLogo = () => (
  <img src={logoimg} alt="logo" style={FooterLogoSize} />
);

const FooterMenu = () => (
  <div style={FooterSize}>
    <div style={FooterContainer}>
      <div style={{ alignSelf: "center", width: "15%" }}>
        <FooterLogo />
      </div>
      <div
        style={{
          alignSelf: "center",
          width: "65%",
          fontFamily: "ヒラギノ角ゴ Pro",
        }}
      >
        <Link to="/" className="headerstyle2" style={FooterStyle}>
          Home
        </Link>
        <Link to="/About" className="headerstyle2" style={FooterStyle}>
          About
        </Link>
        <Link to="/Works" className="headerstyle2" style={FooterStyle}>
          Works
        </Link>
        <Link to="/News" className="headerstyle2" style={FooterStyle}>
          News
        </Link>
        <a
          href="https://blog.opuappnavi.com/"
          className="headerstyle2"
          target="blank"
          style={FooterStyle}
        >
          Blog
        </a>
        <Link to="/Contact" className="headerstyle2" style={FooterStyle}>
          Contact
        </Link>
        <p
          style={{
            paddingLeft: "2.0vw",
            color: "white",
            fontSize: "1.3vw",
            fontFamily: "ヒラギノ角ゴ Pro",
          }}
        >
          CONTACT US : contact@opuappnavi.com
        </p>
      </div>
      <div
        style={{
          width: "25%",
          color: "white",
          display: "flex",
          alignSelf: "center",
          justifyContent: "space-around",
          marginLeft: "13.0vw",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "1.0vw",
              fontFamily: "ヒラギノ角ゴ Pro",
              textAlign: "center",
            }}
          >
            Twitter
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              className="fab fa-twitter"
              href="https://twitter.com/opuappnavi"
              target="_black"
              style={{
                color: "white",
                fontSize: "3.0vw",
                textDecoration: "none",
                textAlign: "center",
              }}
            ></a>
          </div>
        </div>
        <div style={{ marginLeft: "2.0vw" }}>
          <p
            style={{
              fontSize: "1.0vw",
              fontFamily: "ヒラギノ角ゴ Pro",
              textAlign: "center",
            }}
          >
            LINE
          </p>
          <Link
            to="/Line"
            className="fab fa-line"
            target="_black"
            style={{
              color: "white",
              fontSize: "3.8vw",
              textDecoration: "none",
            }}
          ></Link>
        </div>
      </div>
    </div>
  </div>
);

export default FooterMenu;
