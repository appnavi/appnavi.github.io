import React from "react";
import FooterMenu from "./components/footer.js";
import { Link } from "react-router-dom";
import aboutTop from "./images/AboutTop.jpg";
import buttonArrow from "./images/bottomArrow.png";
import map from "./images/map.jpg";

const textStyle = {
  fontSize: "2.0vw",
};

const About = (props) => ({
  render() {
    return (
      <div style={{ backgroundColor: props.color, color: props.fontcolor }}>
        <div
          align="center"
          style={{
            paddingTop: props.padding,
            paddingBottom: "2.0vw",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              fontSize: "3.0vw",
              color: "#454242",
              fontFamily: "ヒラギノ角ゴ Pro",
            }}
          >
            About us
          </h3>
          <div style={textStyle}>
            <p style={{ marginBottom: "5vw" }}></p>
            <p
              style={{
                lineHeight: "200%",
                color: "#454242",
                fontFamily: "ヒラギノ角ゴ Pro",
                fontSize: "2.0vw",
                fontWeight: "bold",
              }}
            >
              {" "}
              大阪府立大学(OPU)でアプリ開発をする部活です{" "}
            </p>
            <p
              style={{
                lineHeight: "200%",
                color: "#454242",
                fontFamily: "ヒラギノ角ゴ Pro",
                fontSize: "2.0vw",
                fontWeight: "bold",
              }}
            >
              アプリ開発だけでなくWebデザインやゲーム、VRを制作中
            </p>
            <p
              style={{
                lineHeight: "200%",
                color: "#454242",
                fontFamily: "ヒラギノ角ゴ Pro",
                fontSize: "2.0vw",
                fontWeight: "bold",
              }}
            >
              部内で大会を主催して技術力を競い合ったり、勉強会を行っています
            </p>
            <p
              style={{
                lineHeight: "200%",
                color: "#454242",
                fontFamily: "ヒラギノ角ゴ Pro",
                fontSize: "2.0vw",
                fontWeight: "bold",
              }}
            >
              コンクールへの出場、受賞経験あり
            </p>
            <p
              style={{
                lineHeight: "200%",
                color: "#454242",
                fontFamily: "ヒラギノ角ゴ Pro",
                fontSize: "2.0vw",
                fontWeight: "bold",
              }}
            >
              未経験者、女子部員も大募集中（女子部員も在籍）
            </p>
            <p
              style={{
                lineHeight: "200%",
                color: "#454242",
                fontFamily: "ヒラギノ角ゴ Pro",
                fontSize: "2.0vw",
                fontWeight: "bold",
              }}
            >
              新着情報はTwitter,LINEで更新中
            </p>
            <p style={{ marginBottom: "5vw" }}></p>

            <div>
              <Link to="/About">
                <img
                  src={buttonArrow}
                  alt="buttonArrow"
                  style={{ width: "10%" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

const AboutPageDescription = {
  lineHeight: "240%",
  fontFamily: "ヒラギノ角ゴ Pro",
  fontSize: "1.8vw",
  color: "#454242",
  fontWeight: "bold",
};
About.defaultProps = {
  padding: "5.0vw",
};
const AboutPage = () => (
  <div>
    <div
      style={{ backgroundColor: "black", width: "100%", height: "12.0vw" }}
    ></div>
    <div style={{ backgroundColor: "white" }}>
      <img src={aboutTop} alt="aboutTop" style={{ width: "100%" }} />
    </div>
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        paddingBottom: "3.0vw",
      }}
    >
      <h2
        style={{
          fontSize: "3.0vw",
          margin: "0",
          textAlign: "center",
          paddingTop: "5.0vw",
          fontFamily: "ヒラギノ角ゴ Pro",
        }}
      >
        About us
      </h2>
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          paddingBottom: "1.5vw",
          margin: "0 auto",
        }}
      >
        <p style={{ marginBottom: "5vw" }}></p>
        <p style={AboutPageDescription}> 2016年　部員６人でアプリNaviを創設 </p>
        <p style={AboutPageDescription}>
          2019年度の部員は約25名　アットホームな雰囲気で活動しています。
        </p>
        <br></br>
        <p style={AboutPageDescription}>活動内容</p>
        <p style={AboutPageDescription}>
          大阪府立大学(OPU)でアプリ開発をする部活です。
        </p>
        <p style={AboutPageDescription}>
          アプリ開発だけでなくWebデザインやゲーム、VRを制作中
        </p>
        <p style={AboutPageDescription}>
          部内で大会を主催して技術力を競い合ったり、勉強会を行っています
        </p>
        <p style={{ marginBottom: "9vw" }}></p>
      </div>
    </div>
    <div style={{ backgroundColor: "#DEDEDE", width: "100%" }}>
      <div
        style={{
          width: "80%",
          height: "70.0vw",
          margin: "0 auto",
          paddingTop: "5vw",
        }}
      >
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "2vw",
              paddingBottom: "1.5vw",
              fontFamily: "源ノ角ゴシック JP,ヒラギノ角ゴ Pro",
              fontWeight: "bold",
            }}
          >
            活動場所　A-5棟<br></br>週１回(活動曜日は学期によって異なります)
          </p>
          <img src={map} alt="map" style={{ width: "80%" }}></img>
          {
            //<GoogleMaps latitude="34.5457708" longitude= "135.505894" />
          }
        </div>
      </div>
    </div>

    <FooterMenu />
  </div>
);
export { About, AboutPage };
