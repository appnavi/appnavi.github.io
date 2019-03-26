import React from 'react';
import logoimg from '../images/logo.png';


const logosize ={
  position:'absolute',
  top:'4.0vw',
  left:'4.0vw',
  width:'18vw',
  height:'18vw'
}

const Logo = () =>(
<img src={logoimg} alt="logo" style={logosize}/>
)

export default Logo;
