import React from 'react';
import contact from './images/contact.png';
import FooterMenu from './components/footer.js';
import MediaQuery from 'react-responsive';

const Contact  = (props) => (
<div style={{backgroundColor:props.backcolor}}>
  <div style={{width:'80%',margin:'0 auto',paddingBottom:'2.0vw'}}>
  <p style={{color:props.color ,textAlign:'center', paddingTop:props.padding,paddingBottom:'1.5vw' ,margin:0,fontSize:'3.0vw',fontFamily:'源ノ角ゴシック JP',fontWeight:"bold"}}>Contact us</p>
    <div style={{width:'100%',textAlign:'center',paddingTop:'5.0vw'}}>
    <img src={contact} alt="contact" style= {{width:props.width,margin:'0 auto'}}/>
    </div>
<div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
    <div style={{color:'black' ,width:'80%',margin:'0 auto',textAlign:'center',fontSize:'1.8vw'}}>
      <p style={{fontFamily:'ヒラギノ角ゴ Pro,sans-serif',fontWeight:"bold",color:props.color}}>
        お仕事依頼、質問、制作についてはこちらまで</p>
      <p style={{fontFamily:'ヒラギノ角ゴ Pro',fontWeight:"bold",color:props.color}}>Conatact us : contact@opuappnavi.com</p>
    <div style={{display:'flex',justifyContent:'space-around',width:'60%',margin:'0 auto'}}>
      <div>
        <p style={{position:'relative',bottom:'0vw',left:'5vw',fontFamily:'ヒラギノ角ゴ Pro',color:props.color}}>Twitter</p>


          <a href="https://twitter.com/opuappnavi" className="fab fa-twitter"  target="_black"style={{color:props.color,fontSize:'4.0vw',textDecoration:'none',position:'relative',bottom:'0vw',left:'5vw'}}></a>
      </div>
      <div>
        <p style={{position:'relative',bottom:'0vw',right:'4vw',fontFamily:'ヒラギノ角ゴ Pro',color:props.color}}>LINE</p>
          <a className="fab fa-line" href="#" target="_black" style={{color:props.color,fontSize:'4.5vw',textDecoration:'none',position:'relative',bottom:'0.5vw',right:'4vw'}}></a>
        </div>
  </div>
  </div>
  </div>

  </div>
</div>
)

const ContactPage =()=> (
  <div>
    <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
    </div>
    <img src={contact} alt="contact" style= {{width:"100%",height:"55vw" ,margin:'0 auto'}}/>
    <Contact padding='5.0vw' color="black" backcolor="white" width="0%"/>
  <MediaQuery query="(max-width:473px)">
  <div style={{backgroundColor:'white',width:'100%',height:'26vh'}}></div>
</MediaQuery>
  <FooterMenu/>
  </div>
)

export {Contact,ContactPage};
