import React from 'react';
import FooterMenu from './components/footer.js';
import map from './images/map.jpg';
import square from './images/square.jpg';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import onoken from './images/onoken.jpg';
import onoken2 from './images/onokensyou2.jpg';
import vtuber from './images/slack-imgs.jpg';

class VtuberYouTube extends React.Component {
  render(props) {
    const opts = {
      height:this.props.hei,
      width: this.props.wid,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId="7hdy0J1tRu8"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


const textStyle = {
  fontSize:'2.0vw'
}

const AboutButtonStyle ={
  textDecoration:'none',
  padding:'2.4% 7.0%',
  border:'0.07vw solid',
  borderColor:'black',
  fontSize:'1.5vw',
  color:'black',
  fontFamily:'ヒラギノ角ゴ Pro',
  position:'absolute',top:'23.4vw',left:'15vw',
  backgroundColor:'white'
}

const About  = (props) => ({
  render(){
    return(
  <div style={{background:props.color,color:props.fontcolor}}>
<div align="center" style={{paddingTop:props.padding,paddingBottom:'2.0vw',width:'90%',margin:'0 auto'}}>
<h3 style={{fontSize:'3.0vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>About us</h3>
<div style={textStyle}>
<p style={{marginBottom:'5vw'}}></p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}> 大阪府立大学(OPU)でアプリ開発をする部活です </p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>アプリ開発だけでなくWebデザインやゲーム、VRを制作中</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>部内で大会を主催して技術力を競い合ったり、勉強会を行っています</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>コンクールへの出場、受賞経験あり</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>未経験者、女子部員も大募集中（女子部員も在籍）</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>新着情報はTwitter,LINEで更新中</p>
<p style={{marginBottom:'13vw'}}></p>

<div style={{display:'flex'}}>
  <div style={{width:'50%'}}>
  <p style={{position:'relative',bottom:'5vw',left:'1vw',fontSize:'1.8vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>活動場所　A-5棟</p>　
  <p style={{position:'relative',bottom:'11vw',left:'1vw',fontSize:'1.8vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>週1回(活動曜日は学期によって異なります）</p>
    <img src={map} alt="地図" style={{width:'115%',position:'relative',bottom:'10vw',right:'2vw'}}/>

  </div>
  <div style={{width:'50%',position:'relative',bottom:'0vw',left:'5vw'}}>
   <img src={square} alt="四角" style={{width:'100%'}}/>
   <p style={{position:'relative',bottom:'30vw',left:'-0.8vw',fontSize:'1.8vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>詳しい活動歴・受賞歴はこちら</p>
   <Link to="/About" style={AboutButtonStyle}>See More</Link>
  </div>
</div>
</div>
</div>
</div>
);
}
})

About.defaultProps = {
  padding:'5.0vw',
};
const AboutPage = () => (
  <div>
    <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
    </div>
    <div style={{backgroundColor:'#D2F4FD',width:'100%',paddingBottom:'3.0vw'}}>
      <h2 style={{fontSize:'3.0vw',margin:'0',textAlign:'center',paddingTop:'5.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>About us</h2>
      <div style={{backgroundColor:'white',width:'90%',paddingBottom:'1.5vw',margin:'0 auto'}}>
      <h3 style={{fontSize:'2.5vw',textAlign:'center',paddingTop:'3.0vw',paddingBottom:'2.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>随時更新中</h3>
      <div style={{width:'100%',fontSize:'1.8vw',paddingLeft:'3.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>
        <div style={{fontFamily:'ヒラギノ角ゴ Pro'}}>
          <p >・2018/8 VTuberハッカソン全国ツアー2018大阪大会　大阪駆動開発賞　受賞</p>
          <p> アプリナビのメンバーがチームの一員として参加させていただきました！</p>
          <p>作品名：「キレッキレ on Ice」チーム</p>
          <p>詳細はこちら↓</p>
          <MediaQuery minWidth={980}>
          {(matches) => {
            if(matches) {
              return   <div style={{display:'flex'}}>
                <div style={{width:'50%'}}>
                  <VtuberYouTube wid='426' hei='240'/>
                </div>
                <div style={{width:'50%'}}>
                  <img src={vtuber} alt="vtuber" style={{width:'80%'}}/>
                </div>
              </div>;

            } else {
              return <div>
                <div style={{width:'80%',paddingBottom:'2.0vw'}}>
                  <VtuberYouTube wid="250" hei="136"/>
                </div >
                <div>
                  <img src={vtuber} alt="vtuber" style={{width:'60%'}}/>
              </div>
                  </div> ;
            }
          }}</MediaQuery>
          </div>
        <div style={{paddingTop:'5.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>
        <p>・2018/11 VR 小野賢章さん</p>
        <p>アニメ声優同好会主催の小野賢章さんのトークイベントにVR作成として<br></br>
            参加させていただきました！</p>
        <p>作品名：ハリーポッターとVR</p>
        <div style={{display:'flex'}}>
          <div style={{width:'80%'}}>
            <img src={onoken} alt='小野賢章さん' style={{width:'80%'}}/>
          </div>
          <div style={{width:'80%'}}>
            <img src={onoken2} alt='小野賢章さんとの全体写真' style={{width:'80%'}}/>
        </div>
         </div>
            </div>
      </div>
    </div>
    </div>
    <FooterMenu/>
  </div>
)
export  {About,AboutPage};
