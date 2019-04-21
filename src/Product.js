import React from 'react';
import store from './images/appstore.jpg';
import newnavi from './images/newnavi.jpg';
import osaka from './images/osaka.jpg';
import food from './images/fooder.jpg';
import name from './images/name.jp';
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

    const PageSequence=['row','row-reverse']
    const PagePadding=['2vw','-2vw']

  return(
    <div>
      <div style={{backgroundColor:'white',width:'90%',height:'35vw',margin:'0 auto',marginBottom:'5.0vw',display:'flex',flexDirection:PageSequence[props.id]}}>
        <div style={{width:'40%',textAlign:'center',alignSelf:'center'}}>
          <img src={props.name} alt={props.contentTitle} style={{width:'66%',position:'relative',bottom:'-1vw',left:PagePadding[props.id]}} />
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
    <ProductContent id = {0} name={newnavi} release="2016/2/4 " contentTitle="新入生ナビ"
     description="大学生用新入生新歓イベントまとめアプリ" dawnload={<a href="https://itunes.apple.com/jp/app/%E6%96%B0%E5%85%A5%E7%94%9Fnavi2019/id1156503289?mt=8" target='_black'>
      <img src={store} alt={'ダウンロードはこちらから'} style={{width:'20%'}}/>
      </a>}/>
      <ProductContent id= {1} name={music} release="2018/11/02 " contentTitle="リズムゲーム！！"
     description="リズムに合わせて画面をタッチして敵を倒そう！"/>
   <ProductContent id= {0} name={vr} release="2016/11/04 " contentTitle="弾幕VRゲーム"
          description="弾を打ちまくって恐竜を倒せ！！" />
        <ProductContent id = {1} name={torokko} contentTitle={<p style={{fontSize:'2.3vw',fontFamily:'ヒラギノ角ゴ Pro'}}>スクリーンゲーム<br></br><br></br>???アドベンチャー！！</p>}
          description="どちらを選ぶか、２択クイズ！！ "  />
        <ProductContent id = {0} name={balloon}  contentTitle={<p style={{fontSize:'2.3vw',fontFamily:'ヒラギノ角ゴ Pro'}}>スクリーンゲーム<br></br><br></br>???バルーン！！</p>}
                description="風船１００個をたくさんの残そう！！" />

    <FooterMenu/>
  </div>
</div>
)
export  {Product,ProductPage};
