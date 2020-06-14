import React from "react";
import { Slide } from "react-slideshow-image";
import store from "./images/appstore.jpg";
import newnavi from "./images/newnavi.jpg";
import name from "./images/name.jpg";
//import nameIcon from "./images/nameIcon.png";
import music from "./images/musicTop.jpg";
import vr from "./images/VRSenden.jpg";
import torokko from "./images/トロッコ.jpg";
import balloon from "./images/風船.jpg";
import FooterMenu from "./components/footer.js";
import { Link } from "react-router-dom";
import undvo from "./images/UNDVOSOLTEX.jpg";
import undvoIcon from "./images/UNDVOSOLTEXIcon.png";
import rizufuru from "./images/りずふる.png";
import rizufuruIcon from "./images/りずふるIcon.png";
import tax_officer from "./images/tax_officer.png";
import tax_officerIcon from "./images/tax_officerIcon.jpg";
import spaceshooter from "./images/SpaceShooter.png";
import spaceshooterIcon from "./images/SpaceShooterIcon.png";
//mport naviIcon from "./images/naviIcon.png";
import worksback from "./images/WorksBack.png";
import seeMore from "./images/SeeMore.png";
import googlebudge from "./images/google-play-badge.png";
import virtualFes from "./images/virtualFes.jpeg";
import virtualFesIcon from "./images/virtualFesIcon.JPEG";
import blogIcon from "./images/appnaviblog.png";
import blog from "./images/appnavi_blog.png";
import MediaQuery from "react-responsive";

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div
      className="slide-container"
      style={{
        height: "50vw",
        paddingBottom: "-5.0vw",
        backgroundImage: `url(${worksback})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Slide {...properties}>
        <div className="each-slide" style={{ marginTop: "7.5vw" }}>
          <ProductContent
            id={0}
            name={blog}
            width="95%"
            contentTitle={
              <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                アプリNaviブログ<br></br>
              </p>
            }
            description={
              <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                概要：アプリNavi部員が作成した記事を公開しています。<br></br>
                絶賛記事更新中！
                <br></br>
                <br></br>
              </p>
            }
            dawnload={
              <a href="https://blog.opuappnavi.com/" target="_black">
                サイトはこちらから！
              </a>
            }
          />
        </div>
        <div className="each-slide" style={{ marginTop: "7.5vw" }}>
          <ProductContent
            id={3}
            name={virtualFes}
            width="95%"
            contentTitle={
              <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                府大バーチャル学祭<br></br>
                アプリNavi展示特設サイト<br></br>
              </p>
            }
            description={
              <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                概要:オンラインで学祭を行なった際に、作品を展示するために作ったHPです。
                <a
                  href="http://appnavi.html.xdomain.jp/index.html"
                  target="_black"
                >
                  サイトはコチラから！
                </a>
              </p>
            }
          />
        </div>
        <div className="each-slide" style={{ marginTop: "7.5vw" }}>
          <ProductContent
            id={3}
            name={tax_officer}
            width="95%"
            contentTitle={
              <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                税官、家を買う<br></br>
              </p>
            }
            description={
              <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                概要:税官になり、増税して、反対してくる納税者を大砲で吹っ飛ばしながら、集めた税金で大きな家を買うミニゲームです。
              </p>
            }
            dawnload={
              <a
                href="https://play.google.com/store/apps/details?id=com.AppNavi.Zeikan"
                target="_black"
              >
                <img
                  src={googlebudge}
                  alt="ダウンロードはこちらから"
                  style={{ width: "18.0vw" }}
                />
              </a>
            }
          />
        </div>
        <div className="each-slide" style={{ marginTop: "7.5vw" }}>
          <ProductContent
            id={1}
            name={undvo}
            width="65%"
            contentTitle={
              <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                UNDVO SOLTEX<br></br>
              </p>
            }
            description={
              <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                概要：無線コントローラとモバイルバッテリーでいつでもどこでもプレイできる、ポータブルかつ正統派な音ゲーです
                <br></br> (技術書名古屋の陣出展作品)
              </p>
            }
            dawnload={
              <a
                style={{ textDecoration: "none" }}
                href="https://twitter.com/appGeneu_73/status/1207061911944060929?s=20"
                target="_blank"
              >
                詳細はこちらから！
              </a>
            }
          />
        </div>
        <div className="each-slide" style={{ marginTop: "7.5vw" }}>
          <ProductContent
            id={2}
            name={rizufuru}
            width="95%"
            contentTitle={
              <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                りずふる<br></br>
              </p>
            }
            description={
              <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                概要：音楽のリズムに合わせて落ちてくる<br></br>
                果物を収穫するゲームです。<br></br>(2019年度白鷺祭展示)
              </p>
            }
          />
        </div>
        <div className="each-slide" style={{ marginTop: "7.5vw" }}>
          <ProductContent
            id={0}
            name={spaceshooter}
            width="95%"
            contentTitle={
              <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                SpaceShooter<br></br>
              </p>
            }
            description={
              <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
                概要：Android Studioを用いて作成した、<br></br>
                シンプルなSFシューティングゲームです。
                <br></br>
                <br></br>
              </p>
            }
          />
        </div>
      </Slide>
    </div>
  );
};

const ProductContent = (props) => ({
  render() {
    const PageSequence = ["row", "row-reverse", "row", "row-reverse"];
    const PagePadding = ["2vw", "-2vw", "5vw", "-5vw"];

    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "35vw",
            padding: "2% 0",
            margin: "0 auto",
            marginBottom: "5.0vw",
            display: "flex",
            flexDirection: PageSequence[props.id],
          }}
        >
          <div
            style={{ width: "40%", textAlign: "center", alignSelf: "center" }}
          >
            <img
              src={props.name}
              alt={props.contentTitle}
              style={{
                width: props.width,
                position: "relative",
                bottom: "-1vw",
                left: PagePadding[props.id],
              }}
            />
          </div>
          <div
            style={{
              width: "60%",
              color: "black",
              alignSelf: "center",
              fontSize: "2.5vw",
            }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "#454242",
                  paddingTop: "0.45vw",
                  width: "20%",
                  fontSize: "2.0vw",
                  fontFamily: "ヒラギノ角ゴ Pro",
                  paddingLeft: "15%",
                  fontWeight: "bold",
                }}
              >
                作品名:
              </p>
              <div
                style={{
                  color: "#454242",
                  width: "70%",
                  fontSize: "2.0vw",
                  textAlign: "left",
                  fontFamily: "ヒラギノ角ゴ Pro",
                  paddingRight: "10%",
                  fontWeight: "bold",
                }}
              >
                {props.contentTitle}
              </div>
            </div>
            <p
              style={{
                color: "#454242",
                paddingTop: "0.20vw",
                width: "70%",
                fontSize: "2.0vw",
                fontFamily: "ヒラギノ角ゴ",
                paddingLeft: "15%",
                marginTop: "0",
                fontWeight: "bold",
                lineHeight: "200%",
              }}
            >
              {props.description}
            </p>

            <p
              style={{
                fontSize: "2.0vw",
                fontFamily: "ヒラギノ角ゴ Pro",
                marginLeft: "25%",
              }}
            >
              {props.dawnload}
            </p>
          </div>
        </div>
      </div>
    );
  },
});

const ProductTopContent = (props) => ({
  render() {
    return (
      <div
        className="WorksTop"
        style={{
          width: "33%",
          textAlign: "center",
          alignSelf: "center",
          height: "30vw",
        }}
      >
        <Link to="/Works" style={{ textDecoration: "none" }}>
          <img
            src={props.image}
            alt={props.image}
            style={{ width: props.image_width }}
          />
          <p
            style={{
              color: "#454242",
              fontSize: props.fontSize,
              fontFamily: "源ノ角ゴシック JP,ヒラギノ角ゴ Pro",
            }}
          >
            {props.title}
          </p>
        </Link>
      </div>
    );
  },
});

const Product2020 = (props) => ({
  render() {
    return (
      <div>
        <ProductContent
          id={0}
          name={blog}
          width="95%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              アプリNaviブログ<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：アプリNavi部員が作成した記事を公開しています。<br></br>
              絶賛記事更新中！
              <br></br>
              <br></br>
              <a href="https://blog.opuappnavi.com/" target="_black">
                サイトはこちらから！
              </a>
            </p>
          }
        />

        <ProductContent
          id={3}
          name={virtualFes}
          width="95%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              府大バーチャル学祭<br></br>
              アプリNavi展示サイト<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：オンラインで学祭を行なった際に、作品を展示するために作ったHPです。
              <a
                href="http://appnavi.html.xdomain.jp/index.html"
                target="_black"
              >
                サイトはコチラから！
              </a>
            </p>
          }
        />
      </div>
    );
  },
});

const Product2019 = (props) => ({
  render() {
    return (
      <div>
        <ProductContent
          id={0}
          name={spaceshooter}
          width="95%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              SpaceShooter<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：Android Studioを用いて作成した、<br></br>
              シンプルなSFシューティングゲームです。
              <br></br>
              <br></br>
            </p>
          }
        />

        <ProductContent
          id={3}
          name={tax_officer}
          width="95%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              税官、家を買う<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：税官になり、増税して、反対してくる納税者を大砲で吹っ飛ばしながら、集めた税金で大きな家を買うミニゲームです。
            </p>
          }
          dawnload={
            <a
              href="https://play.google.com/store/apps/details?id=com.AppNavi.Zeikan"
              target="_black"
            >
              <img
                src={googlebudge}
                alt="ダウンロードはこちらから"
                style={{ width: "18.0vw" }}
              />
            </a>
          }
        />

        <ProductContent
          id={2}
          name={rizufuru}
          width="95%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              りずふる<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：音楽のリズムに合わせて落ちてくる<br></br>
              果物を収穫するゲームです。<br></br>(2019年度白鷺祭展示)
            </p>
          }
        />
        <ProductContent
          id={1}
          name={undvo}
          width="65%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              UNDVO SOLTEX<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：無線コントローラとモバイルバッテリーでいつでもどこでもプレイできる、ポータブルかつ正統派な音ゲーです{" "}
              <br></br>(技術書名古屋の陣出展作品)
            </p>
          }
          dawnload={
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/appGeneu_73/status/1207061911944060929?s=20"
              target="_blank"
            >
              詳細はこちらから！
            </a>
          }
        />
      </div>
    );
  },
});

const Product2018 = (props) => ({
  render() {
    return (
      <div>
        <ProductContent
          id={0}
          name={name}
          width="56%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              Name音衣夢{" "}
            </p>
          }
          description={
            <p
              style={{
                fontSize: "1.8vw",
                fontFamily: "ヒラギノ角ゴ Pro",
                lineHeight: "200%",
              }}
            >
              概要：外国の方のEnglish nameを日本の漢字の名前に変換するアプリ
              <br></br>ダウンロードすれば海外での友達作りに困らないはず！
            </p>
          }
          dawnload={
            <a
              href="https://apps.apple.com/jp/app/name%E9%9F%B3%E8%A1%A3%E5%A4%A2/id1470090957"
              target="_black"
            >
              <img
                src={store}
                alt={"ダウンロードはこちらから"}
                style={{ width: "18.0vw" }}
              />
            </a>
          }
        />
        <ProductContent
          id={1}
          name={music}
          width="56%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              音楽リズムゲーム♫<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：音楽に合わせて画面をタッチして<br></br>得点を競おう
            </p>
          }
        />
      </div>
    );
  },
});

const Product2017 = (props) => ({
  render() {
    return (
      <div>
        <ProductContent
          id={0}
          name={newnavi}
          width="56%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              新入生Navi<br></br>
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：大学の新入生歓迎イベントをまとめたカレンダーアプリ<br></br>
              <br></br>最新の新刊情報をいち早くお届け
            </p>
          }
          dawnload={
            <a
              href="https://itunes.apple.com/jp/app/%E6%96%B0%E5%85%A5%E7%94%9Fnavi2019/id1156503289?mt=8"
              target="_black"
            >
              <img
                src={store}
                alt={"ダウンロードはこちらから"}
                style={{ width: "18.0vw" }}
              />
            </a>
          }
        />
        <ProductContent
          id={3}
          name={vr}
          width="77%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              スクリーンゲーム<br></br>
              <br></br>VRアドベンチャー！
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：弾を使って恐竜を倒すVRゲーム
            </p>
          }
        />
        <ProductContent
          id={2}
          name={torokko}
          width="77%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              スクリーンゲーム<br></br>
              <br></br>トロッコクイズ
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：トロッコに乗って２択クイズを解こう
            </p>
          }
        />
        <ProductContent
          id={3}
          name={balloon}
          width="77%"
          contentTitle={
            <p style={{ fontSize: "2.2vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              スクリーンゲーム<br></br>
              <br></br>風船パーセント
            </p>
          }
          description={
            <p style={{ fontSize: "1.8vw", fontFamily: "ヒラギノ角ゴ Pro" }}>
              概要：世の中のパーセント（割合）を当てるクイズ
            </p>
          }
        />
      </div>
    );
  },
});

const buttonStyle = {
  border: "0",
  cursor: "pointer",
  display: "block",
  WebkitAppearance: "none",
  appearance: "none",
  outline: "none",
  textAlign: "center",
  textDecoration: "none",
  color: "#454242",
  fontFamily: "ヒラギノ角ゴ Pro",
  fontWeight: "bold",
  fontSize: "2.0vw",
  paddingTop: "2.0vw",
  paddingBottom: "2.0vw",
  width: "15.0vw",
  marginLeft: "3%",
  marginBottom: "2%",
  backgroundColor: "#FFFFFF",
  ":hover": {
    backgroundColor: " #686868",
  },
};
class ClickProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showFlag: true };
  }

  render() {
    const showFlag = this.state.showFlag;
    let contents = showFlag ? this.props.yearProduct : "";

    return (
      <div>
        <button
          style={buttonStyle}
          onClick={() => {
            this.setState({ showFlag: !this.state.showFlag });
          }}
        >
          {this.props.year}
        </button>
        {contents}
      </div>
    );
  }
}

const Works = () => (
  <div
    style={{
      backgroundColor: "#454242",
      width: "100%",
      paddingBottom: "7.0vw",
    }}
  >
    <h1
      style={{
        color: "white",
        fontSize: "3.0vw",
        textAlign: "center",
        backgroundColor: "#454242",
        margin: 0,
        paddingTop: "10.0vw",
        paddingBottom: "4.0vw",
        fontFamily: "ヒラギノ角ゴ Pro",
      }}
    >
      Works
    </h1>
    <div
      style={{
        backgroundColor: "white",
        width: "90%",
        height: "65.0vw",
        margin: "0 auto",
        paddingTop: "2vw",
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          paddingTop: "4.0vw",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProductTopContent
          image={spaceshooterIcon}
          image_width="68%"
          title="SpaceShooter"
          fontSize="2.5vw"
        />
        <ProductTopContent
          image={tax_officerIcon}
          image_width="68%"
          title="税官、家を買う"
          fontSize="2.5vw"
        />
        <ProductTopContent
          image={rizufuruIcon}
          image_width="68%"
          title="りずふる"
          fontSize="2.5vw"
        />
        <ProductTopContent
          image={undvoIcon}
          image_width="68%"
          title="UNDVO SOLTEX"
          fontSize="2.5vw"
        />
        <ProductTopContent
          image={blogIcon}
          image_width="68%"
          title="アプリNaviブログ"
          fontSize="2.5vw"
        />
        <ProductTopContent
          image={virtualFesIcon}
          image_width="68%"
          title="府大バーチャル学祭特設サイト"
          fontSize="1.7vw"
        />
      </div>
    </div>
    <div style={{ textAlign: "center", paddingTop: "3vw" }}>
      <Link to="/Works">
        <img src={seeMore} alt="seeMore" style={{ width: "30%" }} />
      </Link>
    </div>
  </div>
);
const ProductPage = () => (
  <div>
    <div
      style={{ backgroundColor: "black", width: "100%", height: "12.0vw" }}
    ></div>
    <Slideshow />
    <div style={{ backgroundColor: "#DEDEDE", width: "100%" }}>
      <h2
        style={{
          color: "black",
          fontSize: "3.0vw",
          textAlign: "center",
          backgroundColor: "#DEDEDE",
          margin: 0,
          paddingTop: "10.0vw",
          paddingBottom: "3.0vw",
          fontFamily: "ヒラギノ角ゴ Pro",
        }}
      >
        Works
      </h2>
      {
        //横幅が小さい時の画面
      }
      <MediaQuery query="(max-width: 767px)">
        <ClickProduct yearProduct={<Product2020 />} year="2020年度" />
        <ClickProduct yearProduct={<Product2019 />} year="2019年度" />
        <ClickProduct yearProduct={<Product2018 />} year="2018年度" />
        <ClickProduct yearProduct={<Product2017 />} year="~2017年度" />
      </MediaQuery>
      {
        //横幅が大きい時の画面
      }
      <MediaQuery query="(min-width: 768px)">
        <div style={{ display: "flex" }}>
          <div style={{ width: "80%" }}>
            <ClickProduct yearProduct={<Product2020 />} year="2020年度" />
            <ClickProduct yearProduct={<Product2019 />} year="2019年度" />
            <ClickProduct
              on="defaultoff"
              yearProduct={<Product2018 />}
              year="2018年度"
            />
            <ClickProduct
              on="defaultoff"
              yearProduct={<Product2017 />}
              year="~2017年度"
            />
          </div>
          <div style={{ width: "20%" }}>
            <h2>アーカイブ</h2>
            <p>制作中</p>
          </div>
        </div>
      </MediaQuery>

      <FooterMenu />
    </div>
  </div>
);
export { Works, ProductPage, Product2019 };
