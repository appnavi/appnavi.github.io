import React from 'react';
import contact from './images/contact.png';
import FooterMenu from './components/footer.js';

const Contact  = () => (
<div style={{backgroundColor:'black'}}>
  <div style={{width:'80%',margin:'0 auto',paddingBottom:'2.0vw'}}>
  <h1 style={{color:'white' ,textAlign:'center', paddingTop:'10.0vw',paddingBottom:'6.0vw' ,margin:0,fontSize:'3.0vw'}}>Contact us</h1>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
    <div style={{color:'white' ,width:'80%',margin:'0 auto',textAlign:'center',fontSize:'2.0vw'}}>
      <p style={{fontFamily:'ヒラギノ角ゴ Pro,sans-serif'}}>
        お仕事依頼、質問、制作についてはこちらまで</p>
    <p>Conatact us : contact@appnavi.com</p>
    <div style={{display:'flex',justifyContent:'space-around',width:'60%',margin:'0 auto'}}>
      <div>
        <p>Twitter</p>
          <a href="https://twitter.com/opuappnavi" className="fab fa-twitter"  target="_black"style={{color:'white',fontSize:'5.0vw',textDecoration:'none'}}></a>
      </div>
      <div>
        <p>LINE</p>
          <a className="fab fa-line" href="#" target="_black" style={{color:'white',fontSize:'5.0vw',textDecoration:'none'}}></a>
        </div>
  </div>
  </div>
  <div style={{width:'100%',textAlign:'center',paddingTop:'5.0vw'}}>
  <img src={contact} alt="contact" style= {{width:'100%',margin:'0 auto'}}/>
  </div>
  </div>

  </div>
</div>
)

const ContactPage =()=> (
  <div>
  <Contact/>
  <FooterMenu/>
  </div>
)

export {Contact,ContactPage};
