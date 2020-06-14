import React from "react";
import FooterMenu from "./components/footer.js";
import newshome from "./images/newshomeimg.jpg";
import newsdirection from "./images/newsdirection.jpg";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import MediaQuery from "react-responsive";
import YouTube from "react-youtube";
import onoken from "./images/onoken.jpg";
import onoken2 from "./images/onokensyou2.jpg";
import vtuber from "./images/slack-imgs.jpg";
import newsTop from "./images/newsTop.jpg";

class VtuberYouTube extends React.Component {
  render(props) {
    const opts = {
      height: this.props.hei,
      width: this.props.wid,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="7hdy0J1tRu8" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const NewsButtonStyle = {
  textDecoration: "none",
  padding: "2.4% 7.0%",
  border: "0.1vw solid",
  borderColor: "black",
  fontSize: "2.0vw",
  color: "black",
  fontFamily: "source-han-sans-japanese",
  position: "absolute",
  top: "39vw",
  left: "31.6vw",
};

const News = () => (
  <div style={{ backgroundColor: "white", width: "100%", height: "70.0vw" }}>
    <div style={{ width: "80%", height: "80%", margin: "0 auto" }}>
      <div style={{ position: "relative" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={newshome}
            alt={"newshomeimg"}
            style={{
              width: "100%",
              position: "relative",
              top: "5vw",
              right: "1vw",
            }}
          />
        </div>
        <h4
          style={{
            fontSize: "3.0vw",
            position: "absolute",
            top: "3vw",
            left: "36vw",
            fontFamily: "source-han-sans-japanese",
          }}
        >
          News
        </h4>
        <h4
          style={{
            position: "absolute",
            fontSize: "1.8vw",
            top: "27vw",
            left: "35.0vw",
            fontFamily: "source-han-sans-japanese",
          }}
        >
          最新情報を更新中
        </h4>
        <div style={{ position: "absolute", top: "32.6vw", left: "39.7vw" }}>
          <img
            src={newsdirection}
            alt={"newsdirectioin"}
            style={{ width: "5vw" }}
          />
        </div>
        <Link to="/News" style={NewsButtonStyle}>
          See More
        </Link>
      </div>
    </div>
  </div>
);

const NewsPage = () => (
  <div>
    <MediaQuery minWidth={470}>
      {(matches) => {
        if (matches) {
          return (
            <div>
              <div
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  height: "12.0vw",
                }}
              ></div>
              <div style={{ backgroundColor: "white" }}>
                <img src={newsTop} alt="newstop" style={{ width: "100%" }} />
              </div>

              <div style={{ backgroundColor: "white", height: "180.0vw" }}>
                <h1
                  style={{
                    color: "black",
                    fontSize: "3.0vw",
                    textAlign: "center",
                    margin: 0,
                    paddingTop: "5.0vw",
                    paddingBottom: "4.0vw",
                    fontFamily: "source-han-sans-japanese",
                  }}
                >
                  News
                </h1>
                <div
                  style={{
                    width: "90%",
                    height: "100vw",
                    margin: "0 auto",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      fontSize: "1.8vw",
                      paddingLeft: "3.0vw",
                      fontFamily: "source-han-sans-japanese",
                    }}
                  >
                    <h3>受賞・活動履歴</h3>
                    <div style={{ fontFamily: "source-han-sans-japanese" }}>
                      <p>
                        ・2018/8
                        VTuberハッカソン全国ツアー2018大阪大会　大阪駆動開発賞　受賞
                      </p>
                      <p>
                        {" "}
                        アプリナビのメンバーがチームの一員として参加させていただきました！
                      </p>
                      <p>作品名：「キレッキレ on Ice」チーム</p>
                      <p>詳細はこちら↓</p>
                      <MediaQuery minWidth={980}>
                        {(matches) => {
                          if (matches) {
                            return (
                              <div>
                                <div style={{ width: "80%" }}>
                                  <VtuberYouTube wid="426" hei="240" />
                                </div>
                                <div style={{ width: "80%" }}>
                                  <img
                                    src={vtuber}
                                    alt="vtuber"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <div>
                                <div
                                  style={{
                                    width: "80%",
                                    paddingBottom: "2.0vw",
                                  }}
                                >
                                  <VtuberYouTube wid="250" hei="136" />
                                </div>
                                <div>
                                  <img
                                    src={vtuber}
                                    alt="vtuber"
                                    style={{ width: "60%" }}
                                  />
                                </div>
                              </div>
                            );
                          }
                        }}
                      </MediaQuery>
                    </div>
                    <div
                      style={{
                        paddingTop: "5.0vw",
                        fontFamily: "source-han-sans-japanese",
                      }}
                    >
                      <p>・2018/11 VR 小野賢章さん</p>
                      <p>
                        アニメ声優同好会主催の小野賢章さんのトークイベントにVR作成として
                        <br></br>
                        参加させていただきました！
                      </p>
                      <p>作品名：ハリーポッターとVR</p>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "80%" }}>
                          <img
                            src={onoken}
                            alt="小野賢章さん"
                            style={{ width: "80%" }}
                          />
                        </div>
                        <div style={{ width: "80%" }}>
                          <img
                            src={onoken2}
                            alt="小野賢章さんとの全体写真"
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "44%", backgroundColor: "white" }}>
                    <div
                      style={{
                        width: "80%",
                        hight: "20.0vw",
                        textAlign: "center",
                        margin: "0 auto",
                      }}
                    >
                      <h3>
                        アーカイブ<br></br>(制作中)
                      </h3>
                      <p>2019</p>
                      <p>2018</p>
                      <p>2017</p>
                      <p>2016</p>
                    </div>
                    <h3
                      style={{
                        textAlign: "center",
                        padding: "2.0vw",
                        fontSize: "2.3vw",
                        fontFamily: "source-han-sans-japanese",
                      }}
                    >
                      新着情報
                    </h3>
                    <div style={{ textAlign: "center" }}>
                      <TwitterTimelineEmbed
                        sourceType="appnavi"
                        screenName="OPUAppNavi"
                        options={{ width: "100%", height: "80vw" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <div
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  height: "12.0vw",
                }}
              ></div>
              <div style={{ backgroundColor: "white" }}>
                <img src={newsTop} alt="newstop" style={{ width: "100%" }} />
              </div>
              <div style={{ backgroundColor: "white", height: "150.0vw" }}>
                <h1
                  style={{
                    color: "black",
                    fontSize: "3.0vw",
                    textAlign: "center",
                    backgroundColor: "white",
                    margin: 0,
                    paddingTop: "5.0vw",
                    paddingBottom: "4.0vw",
                    fontFamily: "source-han-sans-japanese",
                  }}
                >
                  News
                </h1>
                <div
                  style={{ width: "90%", height: "100vw", margin: "0 auto" }}
                >
                  <div style={{ width: "100%", backgroundColor: "white" }}>
                    <h3
                      style={{
                        textAlign: "center",
                        padding: "3.0vw",
                        margin: "3vw",
                        fontFamily: "source-han-sans-japanese",
                        fontSize: "2.3vw",
                      }}
                    >
                      新着情報
                    </h3>
                    <div style={{ textAlign: "center" }}>
                      <TwitterTimelineEmbed
                        sourceType="appnavi"
                        screenName="OPUAppNavi"
                        options={{ width: "100%", height: "100vw" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  fontSize: "1.8vw",
                  paddingLeft: "3.0vw",
                  fontFamily: "source-han-sans-japanese",
                  paddingBottom: "5.0vw",
                }}
              >
                <div
                  style={{
                    fontFamily: "source-han-sans-japanese",
                    fontSize: "2.5vw",
                  }}
                >
                  <p style={{ marginTop: "0", paddingTop: "3.0vw" }}>
                    ・2018/8
                    VTuberハッカソン全国ツアー2018大阪大会　大阪駆動開発賞　受賞
                  </p>
                  <p>
                    {" "}
                    アプリナビのメンバーがチームの一員として参加させていただきました！
                  </p>
                  <p>作品名：「キレッキレ on Ice」チーム</p>
                  <p>詳細はこちら↓</p>
                  <MediaQuery minWidth={980}>
                    {(matches) => {
                      if (matches) {
                        return (
                          <div style={{ display: "flex" }}>
                            <div style={{ width: "50%" }}>
                              <VtuberYouTube wid="426" hei="240" />
                            </div>
                            <div style={{ width: "50%" }}>
                              <img
                                src={vtuber}
                                alt="vtuber"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <div
                              style={{ width: "80%", paddingBottom: "2.0vw" }}
                            >
                              <VtuberYouTube wid="250" hei="136" />
                            </div>
                            <div>
                              <img
                                src={vtuber}
                                alt="vtuber"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                        );
                      }
                    }}
                  </MediaQuery>
                </div>
                <div
                  style={{
                    paddingTop: "5.0vw",
                    fontFamily: "source-han-sans-japanese",
                    fontSize: "2.5vw",
                  }}
                >
                  <p>・2018/11 VR 小野賢章さん</p>
                  <p>
                    アニメ声優同好会主催の小野賢章さんのトークイベントにVR作成として
                    <br></br>
                    参加させていただきました！
                  </p>
                  <p>作品名：ハリーポッターとVR</p>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "80%" }}>
                      <img
                        src={onoken}
                        alt="小野賢章さん"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <div style={{ width: "80%" }}>
                      <img
                        src={onoken2}
                        alt="小野賢章さんとの全体写真"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    </MediaQuery>
    <FooterMenu />
  </div>
);

export { News, NewsPage };
