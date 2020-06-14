import React from "react";
import contact from "./images/contact.png";
import FooterMenu from "./components/footer.js";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import appnaviLine from "./images/LineAppnavi.png";

const Contact = (props) => (
  <div style={{ backgroundColor: props.backcolor }}>
    <div style={{ width: "80%", margin: "0 auto", paddingBottom: "2.0vw" }}>
      <p
        style={{
          color: props.color,
          textAlign: "center",
          paddingTop: props.padding,
          paddingBottom: "1.5vw",
          margin: 0,
          fontSize: "3.0vw",
          fontFamily: "源ノ角ゴシック JP,ヒラギノ角ゴ Pro",
          fontWeight: "bold",
        }}
      >
        Contact us
      </p>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          paddingTop: props.paddingtop,
          marginBottom: "2.0vw",
        }}
      >
        <img
          src={contact}
          alt="contact"
          style={{ width: props.width, margin: "0 auto" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            color: "black",
            width: "80%",
            margin: "0 auto",
            textAlign: "center",
            fontSize: "1.8vw",
          }}
        >
          <p
            style={{
              fontFamily: "ヒラギノ角ゴ Pro",
              fontWeight: "bold",
              color: props.color,
            }}
          >
            お仕事依頼、質問、制作についてはこちらまで
          </p>
          <p
            style={{
              fontFamily: "ヒラギノ角ゴ Pro",
              fontWeight: "bold",
              color: props.color,
            }}
          >
            Conatact us : contact@opuappnavi.com
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
              margin: "0 auto",
            }}
          >
            <div>
              <p
                style={{
                  position: "relative",
                  bottom: "0vw",
                  left: "5vw",
                  fontFamily: "ヒラギノ角ゴ Pro",
                  color: props.color,
                }}
              >
                Twitter
              </p>

              <a
                href="https://twitter.com/opuappnavi"
                className="fab fa-twitter"
                target="_black"
                style={{
                  color: props.color,
                  fontSize: "4.0vw",
                  textDecoration: "none",
                  position: "relative",
                  bottom: "0vw",
                  left: "5vw",
                }}
              ></a>
            </div>
            <div>
              <p
                style={{
                  position: "relative",
                  bottom: "0vw",
                  right: "4vw",
                  fontFamily: "ヒラギノ角ゴ Pro",
                  color: props.color,
                }}
              >
                LINE
              </p>
              <Link
                to="/Line"
                className="fab fa-line"
                target="_black"
                style={{
                  color: props.color,
                  fontSize: "4.5vw",
                  textDecoration: "none",
                  position: "relative",
                  bottom: "0.5vw",
                  right: "4vw",
                }}
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div>
    <div
      style={{ backgroundColor: "black", width: "100%", height: "12.0vw" }}
    ></div>
    <div style={{ backgroundColor: "white" }}>
      <img
        src={contact}
        alt="contact"
        style={{ width: "100%", height: "43.3vw", margin: "0 auto" }}
      />
      <Contact
        padding="5.0vw"
        color="black"
        backcolor="white"
        width="0%"
        paddingtop="2.0vw"
      />
      <MediaQuery query="(max-width:473px)">
        <div
          style={{ backgroundColor: "white", width: "100%", height: "26vh" }}
        ></div>
      </MediaQuery>
    </div>
    <FooterMenu />
  </div>
);

const LineContact = () => (
  <div>
    <div
      style={{ backgroundColor: "black", width: "100%", height: "12.0vw" }}
    ></div>
    <div style={{ backgroundColor: "white" }}>
      <div style={{ width: "80%", textAlign: "center", margin: "0 auto" }}>
        <p
          style={{ fontSize: "3.0vw", fontWeight: "bold", paddingTop: "6.0vw" }}
        >
          アプリNaviの新歓LINEアカウントです！<br></br>ぜひ登録お願いします！
        </p>
        <img
          src={appnaviLine}
          alt="アプリナビライン"
          style={{ width: "100%", margin: "0 auto" }}
        />
      </div>
    </div>
    <FooterMenu />
  </div>
);
export { Contact, ContactPage, LineContact };
