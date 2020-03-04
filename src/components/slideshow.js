import React from 'react';
import { Slide } from 'react-slideshow-image';
import home from '../images/Home.jpg';
import {Link} from 'react-router-dom';
import spring from '../images/spring.jpg';
 
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
  }
}



const Slideshow = () => {
  
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div style={{backgroundColor:"white"}}className="each-slide">
            <div style={{maxWidth:"100%",height:"54.5vw",backgroundSize:"cover",backgroundImage: `url(${home})`,position:"relative"}}>
              <p style={{color:"white",fontSize:"4.2vw",fontWeight:"bold",fontFamily:"ヒラギノ角ゴシック",position:"absolute",top:"20.0vw",right:"9vw"}}>App Navi</p>
              <p style={{color:"white",fontSize:"1.2vw",fontFamily:"ヒラギノ角ゴ Pro",fontWeight:"bold",position:"absolute",top:"29.5vw",right:"9.2vw"}}>大阪府立大学 &emsp;部活 &emsp;アプリナビ</p>
          </div>
          </div>
          <div className="each-slide">
            <div style={{maxWidth:"100%",height:"54.5vw",backgroundSize:"cover",backgroundImage: `url(${spring})`,position:"relative"}}>
              <div style={{filter: "blur(2vw)",opacity:"0.75",backgroundColor: "white",width:"50%",height:"30vw",position:"absolute",top:"15.0vw",right:"4.0vw"}}></div>
              <p style={{color:"#454242",fontSize:"2.0vw",fontWeight:"bold",fontFamily:"ヒラギノ角ゴシック",position:"absolute",top:"18.0vw",right:"15vw"}}> &emsp;ご入学おめでとうございます！<br></br>アプリNaviは新入生を募集中です！</p>
              <p style={{color:"#454242",fontSize:"1.8vw",fontFamily:"源ノ角ゴシック JP,ヒラギノ角ゴ Pro",fontWeight:"bold",position:"absolute",top:"28.0vw",right:"14.0vw"}}>新歓の日程 &emsp; &emsp;新歓情報はこちら↓</p>
              <div style={{position:"absolute",top:"33.0vw",right:"-3.0vw"}} >
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div style={{width:"20.0vw"}} >
                  <p style={{color:"#454242",fontSize:"1.8vw",fontFamily:"源ノ角ゴシック JP,ヒラギノ角ゴ Pro",fontWeight:"bold",marginTop:"1.5vw"}}>（今後更新予定）</p>
                  </div>

                  <div style={{display:"flex", width:"25.0vw",paddingLeft:"5.0vw",alignSelf:"ceter"}}>
                  <div>
          <p style={{color:"#454242",fontSize:'1.0vw',fontFamily:'ヒラギノ角ゴ Pro',textAlign:"center"}}>Twitter</p>
          <div style={{textAlign:"center"}}>
          <a className="fab fa-twitter" href="https://twitter.com/opuappnavi" target="_black"style={{color:'#454242',fontSize:'3.0vw',textDecoration:'none'}}></a>
          </div>
          </div>
        <div style={{marginLeft:"2.0vw"}}>
          <p style={{color:"#454242",fontSize:'1.0vw',fontFamily:'ヒラギノ角ゴ Pro',textAlign:"ceter"}}>LINE</p>
          <Link to="/Line" className="fab fa-line" target="_black"  style={{color:'#454242',fontSize:'3.8vw',textDecoration:'none'}}></Link>  
        </div>
                  </div>
         
                </div>
              </div>
              </div>
          </div>
        </Slide>
      </div>
    )
}



export default Slideshow;