import React from 'react';
import {Link} from 'react-router-dom';

const Headerstyle = {
  fontSize:'1.8vw',
  width:952,
  fontFamily:'ヒラギノ角ゴ Pro',
  color:'white',
  textDecoration:'none',
}

const HeaderMenu = ({children}) => (
  <div>
    <div className="header-position" style={{position:'absolute',top:'2.2vw',right:20,fontFamily:'ヒラギノ角ゴ Pro'}}>
      <Link to="/" style={Headerstyle}>Home　</Link>
      <Link to="/About"  style={Headerstyle}>About　</Link>
      <Link to="/Product" style={Headerstyle}>Product　</Link>
      <Link to="/News"  style={Headerstyle}>News　</Link>
      <Link to="/Contact"  style={Headerstyle}>Contact　</Link>
      </div>
      {children}
  </div>
)

export default HeaderMenu;
