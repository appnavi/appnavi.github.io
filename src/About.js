import React from 'react';
import FooterMenu from './components/footer.js';
import map from './images/map.png';
import square from './images/square.png';
import {Link} from 'react-router-dom';

const textStyle = {
  fontSize:'2.0vw'
}

const AboutButtonStyle ={
  textDecoration:'none',
  padding:'2.4% 7.0%',
  border:'0.07vw solid',
  borderColor:'black',
  fontSize:'1.5vw',
  color:'black',
  fontFamily:'ヒラギノ角ゴ Pro',
  position:'absolute',top:'23.4vw',left:'15vw',
  backgroundColor:'white'
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

<div style={{display:'flex'}}>
  <div style={{width:'50%'}}>
  <p style={{position:'relative',bottom:'5vw',left:'1vw',fontSize:'1.8vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>活動場所　A-5棟</p>　
  <p style={{position:'relative',bottom:'11vw',left:'1vw',fontSize:'1.8vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>週1回(活動曜日は学期によって異なります）</p>
    <img src={map} alt="地図" style={{width:'115%',position:'relative',bottom:'10vw',right:'2vw'}}/>

  </div>
  <div style={{width:'50%',position:'relative',bottom:'0vw',left:'5vw'}}>
   <img src={square} alt="四角" style={{width:'100%'}}/>
   <p style={{position:'relative',bottom:'30vw',left:'-0.8vw',fontSize:'1.8vw',color:'black',fontFamily:'ヒラギノ角ゴ Pro'}}>詳しい活動歴・受賞歴はこちら</p>
   <Link to="/About" style={AboutButtonStyle}>See More</Link>
  </div>
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
  <About padding='8.5vw' color='#D2F4FD'fontcolor='white' />
  <FooterMenu/>
  </div>
)
export  {About,AboutPage};
