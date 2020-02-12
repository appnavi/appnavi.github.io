import React from 'react';
import { Slide } from 'react-slideshow-image';
import home from '../images/Home.jpg';
import spring from '../images/spring.jpg';
 
/*const slideImages = [
  'images/slide_2.jpg',
  '../images/about_image.png'
];*/
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 

/*const HomeColor ={
    maxWidth:'100%',
    height: 0,
    paddingTop:'56.22%',
    backgroundImage: `url(${home})`,
    backgroundSize:'cover',
    position:'relative',
    fontFamily:'ヒラギノ角ゴ Pro'
  }*/
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{maxWidth:"100%",height:"49.0vw",backgroundSize:"cover",backgroundImage: `url(${home})`}}>
</div>
          </div>
          <div className="each-slide">
            <div style={{maxWidth:"100%",height:"49.0vw",backgroundSize:"cover",backgroundImage: `url(${spring})`}}>
             </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;