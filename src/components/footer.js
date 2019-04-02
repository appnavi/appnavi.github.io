import React from 'react';
import {Link} from 'react-router-dom';
import logoimg from '../images/logo.png';

const FooterStyle = {
  fontSize:'1.3vw',
  fontFamily:'ヒラギノ角ゴ Pro',
  color:'white',
  textDecoration:'none',
}

const FooterSize = {
  backgroundColor:'black',
  width:'100%',
  height:80,
  paddingTop:'4.0vw',
  paddingBottom:'2.0vw'

}

const FooterContainer = {
  width:'90%',
  margin:' 0 auto',
  display:'flex',
}

const FooterLogoSize = {
  height:'6.9vw',
  width:'6.8vw',
  position:'relative',bottom:'0.9vw',left:'0vw'

}


const FooterLogo = () =>(
<img src={logoimg} alt="logo" style={FooterLogoSize}/>
)

const FooterMenu = () => (
  <div style={FooterSize}>
  <div style={FooterContainer}>
    <div style={{alignSelf:'center',width:'15%'}}>
    <FooterLogo/>
    </div>
    <div style={{alignSelf:'center',width:'35%'}}>
      <Link to="/Home" style={FooterStyle}>Home　</Link>
      <Link to="/About"  style={FooterStyle}>About　</Link>
      <Link to="/Product" style={FooterStyle}>Product　</Link>
      <Link to="/News"  style={FooterStyle}>News　</Link>
      <Link to="/Contact"  style={FooterStyle}>Contact</Link>
      <p style={{color:'white',fontSize:'1.3vw'}}>CONTACT US : contact@appnavi.com</p>
    </div>
      <div style={{width:'25%', color:'white', display:'flex',
        alignSelf:'center',justifyContent:'space-around'}}>
        <div>
          <p style={{fontSize:'1.0vw',position:'relative',bottom:'1.2vw',left:'13.5vw'}}>Twitter</p>
          <a className="fab fa-twitter" href="https://twitter.com/opuappnavi" target="_black"style={{color:'white',fontSize:'3.0vw',textDecoration:'none',position:'relative',bottom:'1.6vw',left:'13.5vw'}}></a>
      </div>
        <div>
          <p style={{fontSize:'1.0vw',position:'relative',bottom:'1.2vw',left:'10.5vw'}}>LINE</p>
          <a className="fab fa-line" href="#" target="_black" style={{color:'white',fontSize:'3.8vw',textDecoration:'none',position:'relative',bottom:'1.7vw',left:'10vw'}}></a>
        </div>
      </div>
  </div>
  </div>
)

export default FooterMenu;
