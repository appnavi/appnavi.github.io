import React from 'react';
import home from './images/Home.jpg';
import {About} from './About.js';
import {Product} from './Product.js';
import {News} from './News.js';
import {Contact} from './Contact.js';
import FooterMenu from './components/footer.js';


const TitleStyle = {
  color:'white',
  fontSize:'3.5vw',
  position:'absolute',
  top:'40%',
  right:'10%',
  fontFamily:'ヒラギノ角ゴ Pro'
}
const SubStyle = {
  color:'white',
  fontSize:'1.3vw',
  position:'absolute',
  top:'53%',
  right:'8.8%',
  fontFamily:'ヒラギノ角ゴ Pro'
}

const HomeColor ={
  maxWidth:'100%',
  height: 0,
  paddingTop:'56.22%',
  backgroundImage: `url(${home})`,
  backgroundSize:'cover',
  position:'relative',
  fontFamily:'ヒラギノ角ゴ Pro'
}

//<img src={home} alt="home"style={{position:'relative',width:'100%',margin:0}}/>

const Home = () => (
  <div>
    <div style={HomeColor}>
      <h1 style={TitleStyle}>App Navi</h1>
      <h2 style={SubStyle}>大阪府立大学　部活　アプリナビ</h2>
    </div>
  <About/>
  <Product/>
  <News/>
  <Contact padding='9.0vw'/>
  <FooterMenu/>
  </div>
)

export default Home;
