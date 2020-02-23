import React from 'react';
import { Slide } from 'react-slideshow-image';
import home from '../images/Home.jpg';
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
          <div className="each-slide">
            <div style={{maxWidth:"100%",height:"50.0vw",backgroundSize:"cover",backgroundImage: `url(${home})`,position:"relative"}}>
              <p style={{color:"white",fontSize:"4.5vw",fontWeight:"bold",fontFamily:"ヒラギノ角ゴシック",position:"absolute",top:"17.5vw",right:"9vw"}}>App Navi</p>
              <p style={{color:"white",fontSize:"1.5vw",fontFamily:"源ノ角ゴシック JP",fontWeight:"bold",position:"absolute",top:"27vw",right:"8.5vw"}}>大阪府立大学　部活　アプリナビ</p>
          </div>
          </div>
          <div className="each-slide">
            <div style={{maxWidth:"100%",height:"50.0vw",backgroundSize:"cover",backgroundImage: `url(${spring})`}}>
             </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;