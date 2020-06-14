import React, { Component } from "react";

//Appクラス = Appコンポーネント(カスタムタグ)
class HoverButton extends Component {
  constructor(props) {
    super(props);

    let slideBlogBtnHoverInit = {
      position: "relative",
      backgroundColor: "#78B9FA",
      color: "#FFFFFF",
      width: "22.6vw",
      height: "5.36vw",
      fontSize: "1.90vw",
      padding: "1.02vw 2.66vw",
      borderRadius: "4.0vw",
      textDecoration: "none",
      borderBottom: "solid 0.3vw #627295",
      marginTop: "0vw",
      translate: "Translate(0.2vw)",
      fontFamily: "Kosugi Maru, sans-serif",
    };
    //Stateにはスタイル用にオブジェクトを保持しておく
    this.state = {
      stylesHoverButton: slideBlogBtnHoverInit,
    };
  }

  ChangeHoverButtonEnter() {
    let slideBlogBtnHover = {
      position: "relative",
      backgroundColor: "#78B9FA",
      color: "#FFFFFF",
      width: "22.6vw",
      height: "5.36vw",
      fontSize: "1.90vw",
      padding: "1.02vw 2.66vw",
      borderRadius: "4.0vw",
      textDecoration: "none",
      borderBottom: "solid 0.1vw #627295",
      marginTop: "0.2vw",
      top: "0.2vw",
      fontFamily: "Kosugi Maru, sans-serif",
    };

    this.setState({ stylesHoverButton: slideBlogBtnHover });
  }

  ReturnHoverButtonLeave() {
    let slideBlogBtn = {
      position: "relative",
      backgroundColor: "#78B9FA",
      color: "#FFFFFF",
      width: "22.6vw",
      height: "5.36vw",
      fontSize: "1.90vw",
      padding: "1.02vw 2.66vw",
      borderRadius: "4.0vw",
      textDecoration: "none",
      borderBottom: "solid 0.3vw #627295",
      marginTop: "0vw",
      fontFamily: "Kosugi Maru, sans-serif",
    };

    this.setState({ stylesHoverButton: slideBlogBtn });
  }

  render() {
    return (
      <a
        className="elm"
        href="https://blog.opuappnavi.com/"
        target="blank"
        style={this.state.stylesHoverButton}
        onMouseEnter={() => this.ChangeHoverButtonEnter()}
        onMouseLeave={() => this.ReturnHoverButtonLeave()}
      >
        アプリNaviブログ
      </a>
    );
  }
}

//他の場所で読み込んで使えるようにexport
export default HoverButton;
