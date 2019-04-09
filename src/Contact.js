import React from 'react';
import contact from './images/contact.png';
import FooterMenu from './components/footer.js';

const Contact  = () => (
<div style={{backgroundColor:'#D2F4FD'}}>
  <div style={{width:'80%',margin:'0 auto',paddingBottom:'2.0vw'}}>
  <h1 style={{color:'black' ,textAlign:'center', paddingTop:'9.0vw',paddingBottom:'1.5vw' ,margin:0,fontSize:'3.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>Contact us</h1>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
    <div style={{color:'black' ,width:'80%',margin:'0 auto',textAlign:'center',fontSize:'1.8vw'}}>
      <p style={{fontFamily:'ヒラギノ角ゴ Pro,sans-serif'}}>
        お仕事依頼、質問、制作についてはこちらまで</p>
    <p style={{fontFamily:'ヒラギノ角ゴ Pro'}}>Conatact us : contact@appnavi.com</p>
    <div style={{display:'flex',justifyContent:'space-around',width:'60%',margin:'0 auto'}}>
      <div>
        <p style={{position:'relative',bottom:'0vw',left:'5vw',fontFamily:'ヒラギノ角ゴ Pro'}}>Twitter</p>


          <a href="https://twitter.com/opuappnavi" className="fab fa-twitter"  target="_black"style={{color:'black',fontSize:'4.0vw',textDecoration:'none',position:'relative',bottom:'0vw',left:'5vw'}}></a>
      </div>
      <div>
        <p style={{position:'relative',bottom:'0vw',right:'4vw',fontFamily:'ヒラギノ角ゴ Pro'}}>LINE</p>
          <a className="fab fa-line" href="#" target="_black" style={{color:'black',fontSize:'4.5vw',textDecoration:'none',position:'relative',bottom:'0.5vw',right:'4vw'}}></a>
        </div>
  </div>
  </div>
  <div style={{width:'100%',textAlign:'center',paddingTop:'5.0vw'}}>
  <img src={contact} alt="contact" style= {{width:'85%',margin:'0 auto'}}/>
  </div>
  </div>

  </div>
</div>
)

const ContactPage =()=> (
  <div>
    <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
    </div>
  <Contact/>
  <FooterMenu/>
  </div>
)

export {Contact,ContactPage};
