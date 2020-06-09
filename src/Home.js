import React from 'react';
import {About} from './About.js';
import {Works} from './Product.js';
import {News} from './News.js';
import {Contact} from './Contact.js';
import FooterMenu from './components/footer.js';
import Slideshow from './components/slideshow.js';



/*const HomeColor ={
  maxWidth:'100%',
  height: 0,
  paddingTop:'56.22%',
  backgroundImage: `url(${home})`,
  backgroundSize:'cover',
  position:'relative',
  fontFamily:'ヒラギノ角ゴ Pro'
}*/

//<img src={home} alt="home"style={{position:'relative',width:'100%',margin:0}}/>

const Home = () => (
  <div>
    <Slideshow/>
  <About color="white"/>
  <Works/>
  <News/>
  <Contact padding='9.0vw' color="white" backcolor="#454242" width="80%"/>
  <FooterMenu/>
  </div>
)

export default Home;
