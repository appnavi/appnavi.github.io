import React from 'react';
import FooterMenu from './components/footer.js';

const textStyle = {
  fontSize:'2.0vw'
}



const About  = (props) => ({
  render(){
    return(
  <div style={{background:props.color,color:props.fontcolor}}>
<div align="center" style={{paddingTop:props.padding,paddingBottom:'5.0vw',width:'80%',margin:'0 auto'}}>
<h3 style={{fontSize:'3.0vw'}}>About us</h3>
<div style={textStyle}>
<p>大阪府立大学(OPU)でアプリ開発をする部活です</p>
<p>アプリ開発だけでなくWebデザインやゲーム、VRを制作中</p>
<p>部内で大会を主催して技術力を競い合ったり、勉強会を行っています</p>
<p>コンクールへの出場、受賞経験あり</p>
<p>未経験者、女子部員も大募集中（女子部員も在籍）</p>
<p>新着情報はTwitter,LINEで更新中</p>
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
  <About padding='8.5vw' color='linear-gradient(#070606, #7C7C7C)'fontcolor='white' />
  <FooterMenu/>
  </div>
)

export  {About,AboutPage};
