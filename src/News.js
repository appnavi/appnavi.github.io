import React from 'react';
import FooterMenu from './components/footer.js';
import twitter from './images/s_Twitter2.JPG';
import active from './images/active1.jpg';
import newshome from './images/newshomeimg.jpg';
import hackathon from './images/hackathon.jpg';
import  newsdirection from './images/newsdirection.jpg';
import {Link} from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import MediaQuery from 'react-responsive';


const NewsContent =(props)=> {
  return(
    <div style={{textAlign:'center',padding:'1.0vw 0'}}>
      <img src={props.name} alt={props.name} style={{width:'90%'}}/>
    </div>
  )
}

const NewsButtonStyle ={
  textDecoration:'none',
  padding:'2.4% 7.0%',
  border:'0.1vw solid',
  borderColor:'black',
  fontSize:'2.0vw',
  color:'black',
  fontFamily:'ヒラギノ角ゴ Pro',
  position:'absolute',top:'39vw',left:'31.6vw'
}

const News = () => (
  <div style={{width:'100%',height:'70.0vw'}}>
    <div style={{width:'80%',height:'80%',margin:'0 auto'}}>
      <div style={{position:'relative'}}>
      <div style={{textAlign:'center'}}>
        <img src={newshome} alt={"newshomeimg"} style={{width:'100%',position:'relative',top:'5vw',right:'1vw'}}/>
      </div>
      <h4 style={{fontSize:'3.0vw',position:'absolute',top:'3vw',left:'36vw',fontFamily:'ヒラギノ角ゴ Pro'}}>News</h4>
      <h4 style={{position:'absolute',fontSize:'1.8vw',top:'27vw',left:'35.0vw',fontFamily:'ヒラギノ角ゴ Pro',}}>最新情報を更新中</h4>
      <div style={{position:'absolute',top:'32.6vw',left:'39.7vw'}}>
        <img src={newsdirection} alt={"newsdirectioin"} style={{width:'5vw'}}/>
      </div>
        <Link to="/News" style={NewsButtonStyle}>See More</Link>
    </div>
    </div>
    </div>
)

const NewsPage = () => (

  <div>
    <MediaQuery minWidth={470}>

{(matches) => {
  if(matches){
    return(
      <div>
      <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
      </div>
      <div style={{backgroundColor:'#D2F4FD',height:'120.0vw'}}>
      <h1 style={{color:'black',fontSize:'3.0vw',textAlign:'center',backgroundColor:'#D2F4FD',margin:0,paddingTop:'5.0vw',paddingBottom:'4.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>News</h1>
        <div style={{width:'90%',height:'100vw',margin:'0 auto',display:'flex'}}>
            <div style={{width:'52%',backgroundColor:'white',marginRight:'4%',textAlign:'center'}}>
            <h3 style={{padding:'2.0vw',fontSize:'2.3vw',fontFamily:'ヒラギノ角ゴ Pro',}}>活動風景</h3>
            <div>
              <p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro',}}>アットホームな雰囲気で和気あいあいと活動中！(^ ^)</p>
              <p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro',}}>未経験も女子も大歓迎です！</p>
              <div>
                  <NewsContent name={active}/>
                  <NewsContent name={twitter}/>
                  <NewsContent name={hackathon}/>
              </div>
            </div>
            </div>
            <div style={{width:'44%',backgroundColor:'white'}}>
            <h3 style={{textAlign:'center',padding:'2.0vw',fontSize:'2.3vw',fontFamily:'ヒラギノ角ゴ Pro',}}>新着情報</h3>
            <div style={{textAlign:'center'}}>
              <TwitterTimelineEmbed sourceType="appnavi" screenName="OPUAppNavi" options={{width:'100%',height:'80vw'}} />
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div>
      <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
      </div>
      <div style={{backgroundColor:'#D2F4FD',height:'315.0vw'}}>
      <h1 style={{color:'black',fontSize:'3.0vw',textAlign:'center',backgroundColor:'#D2F4FD',margin:0,paddingTop:'5.0vw',paddingBottom:'4.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>News</h1>
      <div style={{width:'90%',height:'100vw',margin:'0 auto'}}>
          <div style={{width:'100%',backgroundColor:'white',textAlign:'center'}}>
          <h3 style={{padding:'2.0vw',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'2.3vw'}}>活動風景</h3>
          <div>
            <p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro',}}>アットホームな雰囲気で<br></br>和気あいあいと活動中！(^ ^)</p>
            <p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro',}}>未経験も女子も大歓迎です！</p>
            <div>
                <NewsContent name={active}/>
                <NewsContent name={twitter}/>
                <NewsContent name={hackathon}/>
            </div>
          </div>
          </div>
          <div style={{width:'100%',backgroundColor:'white'}}>
          <h3 style={{textAlign:'center',padding:'3.0vw',margin:'3vw',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'2.3vw'}}>新着情報</h3>
          <div style={{textAlign:'center'}}>
            <TwitterTimelineEmbed sourceType="appnavi" screenName="OPUAppNavi" options={{width:'100%',height:'100vw'}} />
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}}</MediaQuery>
  <FooterMenu/>
  </div>
)

export {News,NewsPage};
