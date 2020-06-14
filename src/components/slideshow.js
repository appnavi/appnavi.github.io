import React from "react";
import { Slide } from "react-slideshow-image";
import home from "../images/Home.jpg";
import { Link } from "react-router-dom";
import spring from "../images/spring.jpg";
import blogNote from "../images/BlogAdvertise.png";
import HoverButton from "./hoverButton";

/*const slideImages = [
  'images/slide_2.jpg',
  '../images/about_image.png'
];*/

const properties = {
  duration: 6000,
  transitionDuration: 700,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div style={{ backgroundColor: "white" }} className="each-slide">
          <div
            style={{
              maxWidth: "100%",
              height: "54.5vw",
              backgroundSize: "cover",
              backgroundImage: `url(${home})`,
              position: "relative",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "4.2vw",
                fontWeight: "bold",
                fontFamily: "ヒラギノ角ゴシック",
                position: "absolute",
                top: "20.0vw",
                right: "9vw",
              }}
            >
              App Navi
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1.2vw",
                fontFamily: "source-han-sans-japanese",
                fontWeight: "bold",
                position: "absolute",
                top: "29.5vw",
                right: "9.2vw",
              }}
            >
              大阪府立大学 &emsp;部活 &emsp;アプリナビ
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }} className="each-slide">
          <div
            style={{
              maxWidth: "100%",
              height: "54.5vw",
              backgroundSize: "cover",
              backgroundImage: `url(${blogNote})`,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "21.9vw",
                right: "8.3vw",
                width: "42.9vw",
                height: "27vw",
                borderRadius: "100%",
                backgroundColor: "#FFFFFFD9",
                opacity: 1,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#454242",
                  fontSize: "2.08vw",

                  fontFamily: "Kosugi Maru, sans-serif",
                  textAlign: "center",
                  marginTop: "7.5vw",
                  lineHeight: "3.5vw",
                }}
              >
                部員ブログ始めました！<br></br>
                ぜひ覗いてみてください↓
              </p>
              <HoverButton />
            </div>
          </div>
        </div>

        <div className="each-slide">
          <div
            style={{
              maxWidth: "100%",
              height: "54.5vw",
              backgroundSize: "cover",
              backgroundImage: `url(${spring})`,
              position: "relative",
            }}
          >
            <div
              style={{
                filter: "blur(2vw)",
                opacity: "0.75",
                backgroundColor: "white",
                width: "50%",
                height: "30vw",
                position: "absolute",
                top: "15.0vw",
                right: "4.0vw",
              }}
            ></div>
            <p
              style={{
                color: "#454242",
                fontSize: "2.1vw",
                fontWeight: "bold",
                fontFamily: "source-han-sans-japanese",
                position: "absolute",
                top: "22.0vw",
                right: "9vw",
              }}
            >
              {" "}
              &emsp; アプリNaviでは部員を随時募集中です！
            </p>
            <p
              style={{
                color: "#454242",
                fontSize: "1.8vw",
                fontFamily: "source-han-sans-japanese,ヒラギノ角ゴ Pro",
                fontWeight: "bold",
                position: "absolute",
                top: "28.0vw",
                right: "10.0vw",
              }}
            >
              少しでも気になる方は、コチラもチェック！
            </p>
            <div
              style={{ position: "absolute", top: "33.0vw", right: "-3.0vw" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    width: "38.0vw",
                    paddingLeft: "23.0vw",
                    alignSelf: "ceter",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#454242",
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
                          color: "#454242",
                          fontSize: "3.0vw",
                          textDecoration: "none",
                          marginTop: "0.45vw",
                        }}
                      ></a>
                    </div>
                  </div>
                  <div style={{ marginLeft: "9.0vw" }}>
                    <p
                      style={{
                        color: "#454242",
                        fontSize: "1.0vw",
                        fontFamily: "ヒラギノ角ゴ Pro",
                        textAlign: "ceter",
                      }}
                    >
                      LINE
                    </p>
                    <Link
                      to="/Line"
                      className="fab fa-line"
                      target="_black"
                      style={{
                        color: "#454242",
                        fontSize: "3.8vw",
                        textDecoration: "none",
                      }}
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
