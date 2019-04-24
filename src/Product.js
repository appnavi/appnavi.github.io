import React from 'react';
import store from './images/appstore.jpg';
import newnavi from './images/newnavi.jpg';
import osaka from './images/osaka.jpg';
import food from './images/fooder.jpg';
import name from './images/name.jpg';
import music from './images/musicTop.jpg';
import vr from './images/VRSenden.jpg';
import appnavi from './images/apphomepage.jpg';
import torokko from './images/トロッコ.jpg';
import balloon from './images/風船.jpg';
 import FooterMenu from './components/footer.js';
import {Link} from 'react-router-dom';

const HomeProductStyle = {
  textDecoration:'none',
  padding:'39.4% 15.0%',
  border:'0.1vw solid',
  borderColor:'black',
  fontSize:'2.0vw',
  color:'black',
  fontFamily:'ヒラギノ角ゴ Pro'
}



const ProductContent =(props) =>({
render(){

    const PageSequence=['row','row-reverse','row','row-reverse']
    const PagePadding=['2vw','-2vw','5vw','-5vw']

  return(
    <div>
      <div style={{backgroundColor:'white',width:'90%',height:'35vw',margin:'0 auto',marginBottom:'5.0vw',display:'flex',flexDirection:PageSequence[props.id]}}>
        <div style={{width:'40%',textAlign:'center',alignSelf:'center'}}>
          <img src={props.name} alt={props.contentTitle} style={{width:props.width,position:'relative',bottom:'-1vw',left:PagePadding[props.id]}} />
        </div>
        <div style={{width:'60%',color:'black',alignSelf:'center',textAlign:'center',fontSize:'2.5vw'}}>
          <p style={{fontSize:'2.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>{props.release}</p>
          {props.contentTitle}
          <p style={{fontSize:'2.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>{props.description}</p>
          <p style={{fontSize:'2.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>{props.dawnload}</p>
        </div>
      </div>
    </div>
)
}
});

const Product  = () => (
  <div style={{backgroundColor:'#D2F4FD',width:'100%',paddingBottom:'7.0vw'}}>
  <h1 style={{color:'black',fontSize:'3.0vw',textAlign:'center',backgroundColor:'#D2F4FD',margin:0,paddingTop:'10.0vw',paddingBottom:'4.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>Product</h1>
  <div style={{backgroundColor:'white',width:'90%',height:'60.0vw',margin:'0 auto'}}>
    <div style={{width:'90%',margin:'0 auto',paddingTop:'4.0vw',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={newnavi} alt={'新入生ナビ'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={food} alt={'food'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={music} alt={'音ゲー'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={name} alt={'name'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={appnavi} alt={'アプリナビ'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
          <Link to="/Product" style={HomeProductStyle}>See More</Link>
        </div>
    </div>

  </div>
  </div>
)
const ProductPage =()=> (
  <div>
    <div style={{backgroundColor:'black', width:'100%',height:'12.0vw'}}>
  </div>
  <div style={{backgroundColor:'#D2F4FD',width:'100%'}}>
    <h1 style={{color:'black',fontSize:'3.0vw',textAlign:'center',backgroundColor:'#D2F4FD',margin:0,paddingTop:'5.0vw',paddingBottom:'4.0vw',fontFamily:'ヒラギノ角ゴ Pro'}}>Product</h1>
    <ProductContent id = {0} name={newnavi} release="2016/2/4 " width='56%' contentTitle={<p style={{fontSize:'2.2vw',fontFamily:'ヒラギノ角ゴ Pro'}}>新入生Navi<br></br></p>}
     description={<p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro'}}>大学生用新入生歓迎イベントまとめアプリ<br></br><br></br>ダウンロードはこちらから↓</p>}　dawnload={<a href="https://itunes.apple.com/jp/app/%E6%96%B0%E5%85%A5%E7%94%9Fnavi2019/id1156503289?mt=8" target='_black'>
      <img src={store} alt={'ダウンロードはこちらから'} style={{width:'20%'}}/>
      </a>}/>
    <ProductContent id= {1} name={music} release="2018/11/02 " width='56%' contentTitle={<p style={{fontSize:'2.2vw',fontFamily:'ヒラギノ角ゴ Pro'}}>音楽リズムゲーム♫<br></br></p>}
     description={<p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro'}}>音楽に合わせて画面をタッチ、得点を競おう</p>}/>
     <ProductContent id = {0} name={name}  release="2019/03/04" width='56%' contentTitle={<p style={{fontSize:'2.2vw',fontFamily:'ヒラギノ角ゴ Pro'}}>Name音衣夢 </p>}
                 description={<p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro', lineHeight:'200%'}}>外国の方のEnglish nameを<br></br>日本の漢字の名前に変換するアプリ</p>}/>
               <ProductContent id= {3} name={vr} release="2016/11/04 " width='77%' contentTitle={<p style={{fontSize:'2.2vw',fontFamily:'ヒラギノ角ゴ Pro'}}>スクリーンゲーム<br></br><br></br>VRアドベンチャー！</p>}
          description={<p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro'}}>弾を使って恐竜を倒すVRゲーム</p>}/>
        <ProductContent id = {2} name={torokko} width='77%' contentTitle={<p style={{fontSize:'2.2vw',fontFamily:'ヒラギノ角ゴ Pro'}}>スクリーンゲーム<br></br><br></br>トロッコクイズ</p>}
          description={<p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro'}}>トロッコに乗って２択クイズを解こう</p>}/>
        <ProductContent id = {3} name={balloon} width='77%'  contentTitle={<p style={{fontSize:'2.2vw',fontFamily:'ヒラギノ角ゴ Pro'}}>スクリーンゲーム<br></br><br></br>風船パーセント</p>}
                description={<p style={{fontSize:'1.8vw',fontFamily:'ヒラギノ角ゴ Pro'}}>世の中のパーセント（割合）を当てるクイズ</p>}/>

    <FooterMenu/>
  </div>
</div>
)
export  {Product,ProductPage};
