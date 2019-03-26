import React from 'react';
import {Link} from 'react-router-dom';
import logoimg from '../images/logo.png';

const FooterStyle = {
  fontSize:'2.5vw',
  fontFamily:'ヒラギノ角ゴ Pro',
  color:'white',
  textDecoration:'none',
}

const FooterSize = {
  backgroundColor:'black',
  width:'100%',
  height:130,
  paddingTop:'3.0vw',
  paddingBottom:'3.0vw'

}

const FooterContainer = {
  width:'90%',
  margin:' 0 auto',
  display:'flex',
}

const FooterLogoSize = {
  height:'10.0vw',
  width:'10.0vw',

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
    <div style={{alignSelf:'center',width:'60%'}}>
      <Link to="/" style={FooterStyle}>Home　</Link>
      <Link to="/About"  style={FooterStyle}>About　</Link>
      <Link to="/Product" style={FooterStyle}>Product　</Link>
      <Link to="/News"  style={FooterStyle}>News　</Link>
      <Link to="/Contact"  style={FooterStyle}>Contact</Link>
      <p style={{color:'white',fontSize:'1.5vw'}}>CONTACT US : contact@appnavi.com</p>
    </div>
      <div style={{width:'25%', color:'white', display:'flex',
        alignSelf:'center',justifyContent:'space-around'}}>
        <div>
          <p style={{fontSize:'1.5vw'}}>Twitter</p>
          <a className="fab fa-twitter" href="https://twitter.com/opuappnavi" target="_black"style={{color:'white',fontSize:'5.0vw',textDecoration:'none'}}></a>
      </div>
        <div>
          <p style={{fontSize:'1.5vw'}}>LINE</p>
          <a className="fab fa-line" href="#" target="_black" style={{color:'white',fontSize:'5.0vw',textDecoration:'none'}}></a>
        </div>
      </div>
  </div>
  </div>
)

export default FooterMenu;
