import React from 'react';
import logoimg from '../images/logo.png';


const logosize ={
  position:'absolute',
  top:'1.0vw',
  left:'3.0vw',
  width:'9.5vw',
  height:'9.7vw'
}

const Logo = () =>(
<img src={logoimg} alt="logo" style={logosize}/>
)

export default Logo;
