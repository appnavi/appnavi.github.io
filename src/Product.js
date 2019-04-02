import React from 'react';
import newnavi from './images/newnavi.png';
import osaka from './images/osaka.png';
import food from './images/fooder.png';
import name from './images/name.png';
 import FooterMenu from './components/footer.js';
import {Link} from 'react-router-dom';

const HomeProductStyle = {
  textDecoration:'none',
  padding:'39.4% 15.0%',
  border:'0.1vw solid',
  borderColor:'black',
  fontSize:'2.0vw',
  color:'black',
  fontFamily:'ヒラギノ明朝 Pro',
}



const ProductContent =(props) =>({
render(){

    const PageSequence=['row','row-reverse']

  return(
    <div>
      <div style={{backgroundColor:'white',width:'90%',height:'35vw',margin:'0 auto',marginBottom:'5.0vw',display:'flex',flexDirection:PageSequence[props.id]}}>
        <div style={{width:'40%',textAlign:'center',alignSelf:'center'}}>
          <img src={props.name} alt={props.contentTitle} style={{width:'62%'}} />
        </div>
        <div style={{width:'60%',color:'black',alignSelf:'center',textAlign:'center',fontSize:'2.5vw'}}>
          <p>{props.release}Release</p>
          <p>{props.contentTitle}</p>
          <p>制作:{props.developer}</p>
          <p>Download:{props.dawnload}</p>
        </div>
      </div>
    </div>
)
}
});

const Product  = () => (
  <div style={{backgroundColor:'#D2F4FD',width:'100%',paddingBottom:'7.0vw'}}>
  <h1 style={{color:'black',fontSize:'3.0vw',textAlign:'center',backgroundColor:'#D2F4FD',margin:0,paddingTop:'10.0vw',paddingBottom:'4.0vw'}}>Product</h1>
  <div style={{backgroundColor:'white',width:'90%',height:'60.0vw',margin:'0 auto'}}>
    <div style={{width:'90%',margin:'0 auto',paddingTop:'4.0vw',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={newnavi} alt={'新入生ナビ'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={food} alt={'food'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={newnavi} alt={'新入生ナビ'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={name} alt={'name'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
        <img src={newnavi} alt={'新入生ナビ'} style={{width:'70%'}}/>
      </div>
      <div style={{width:'33%',textAlign:'center',alignSelf:'center'}}>
          <Link to="/Product" style={HomeProductStyle}>See More</Link>
        </div>
    </div>

  </div>
  </div>
)
const ProductPage =()=> (
  <div style={{backgroundColor:'#D2F4FD',width:'100%'}}>
    <h1 style={{color:'black',fontSize:'3.0vw',textAlign:'center',backgroundColor:'#D2F4FD',margin:0,paddingTop:'10.0vw',paddingBottom:'4.0vw'}}>Product</h1>
    <ProductContent id = {0} name={newnavi} release="2016/2/4 " contentTitle="新入生ナビ"
       developer="Hyuga Hara" Description="大学生用新歓イベントまとめアプリ" dawnload="fjaklfjakfj;lkjl;j"/>
     <ProductContent id= {1} name={osaka} release="2018/3/22 " contentTitle="大阪城"
       developer="Unity班" Description="大阪城観光VR" dawnload="kjafljklj"/>
    <FooterMenu/>
  </div>
)
export  {Product,ProductPage};
