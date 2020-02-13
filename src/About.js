import React from 'react';
import FooterMenu from './components/footer.js';
import {Link} from 'react-router-dom';
import aboutTop from './images/AboutTop.jpg';
import SimpleMap from './components/googleMap.js';


const textStyle = {
  fontSize:'2.0vw'
}

const AboutButtonStyle ={
  display:"inline-block",
  color: "black",
  textDecoration: "none",
  backgroundColor: "black",
  borderRadius: "50%",
  position: "relative",
  height: "50px",
  width: "50px"
  }  
  

const About  = (props) => ({
  render(){
    return(
  <div style={{background:props.color,color:props.fontcolor}}>
<div align="center" style={{paddingTop:props.padding,paddingBottom:'2.0vw',width:'90%',margin:'0 auto'}}>
<h3 style={{fontSize:'3.0vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>About us</h3>
<div style={textStyle}>
<p style={{marginBottom:'5vw'}}></p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}> 大阪府立大学(OPU)でアプリ開発をする部活です </p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>アプリ開発だけでなくWebデザインやゲーム、VRを制作中</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>部内で大会を主催して技術力を競い合ったり、勉強会を行っています</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>コンクールへの出場、受賞経験あり</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>未経験者、女子部員も大募集中（女子部員も在籍）</p>
<p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>新着情報はTwitter,LINEで更新中</p>
<p style={{marginBottom:'13vw'}}></p>

<div>
<Link to="/About" style={AboutButtonStyle} ></Link>
  </div>  
      
</div>
</div>
</div>
);
}
})

About.defaultProps = {
  padding:'5.0vw',
};
const AboutPage = () => (
  <div>
    <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
    </div>
<img src = {aboutTop} alt ="aboutTop" style ={{width:'100%'}}/>
    <div style={{backgroundColor:'white',width:'100%',paddingBottom:'3.0vw'}}>
      <h2 style={{fontSize:'3.0vw',margin:'0',textAlign:'center',paddingTop:'5.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>About us</h2>
      <div style={{backgroundColor:'white',width:'80%',paddingBottom:'1.5vw',margin:'0 auto'}}>
      <p style={{marginBottom:'5vw'}}></p>
  <p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}> 2016年　部員６人でアプリNaviを創設 </p>
  <p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>2019年度の部員は約25名　アットホームな雰囲気で活動しています。</p><br></br>
  <p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'2.0vw'}}>活動内容</p>
  <p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>大阪府立大学(OPU)でアプリ開発をする部活です。</p>
  <p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>アプリ開発だけでなくWebデザインやゲーム、VRを制作中</p>
  <p style={{lineHeight:'200%',color:'black',fontFamily:'ヒラギノ角ゴ Pro',fontSize:'1.8vw'}}>部内で大会を主催して技術力を競い合ったり、勉強会を行っています</p>
  <p style={{marginBottom:'9vw'}}></p>
    </div>
    </div>
    <div style={{backgroundColor:"#DEDEDE",width:"100%"}}>
  <div style={{width:"80%",height:"60.0vw",margin:"0 auto"}}>
    <div style={{textAlign:"center",margin:"0 auto"}}>
    <SimpleMap/>
       </div>
  </div>
  </div>
  
    <FooterMenu/>
  </div>
)
export  {About,AboutPage};
