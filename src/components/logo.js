import React from 'react';
import logoimg from '../images/logo.png';


const logosize ={
  position:'absolute',
  top:'2.0vw',
  left:'3.0vw',
  width:'9.8vw',
  height:'10vw'
}

const Logo = () =>(
<img src={logoimg} alt="logo" style={logosize}/>
)

export default Logo;
