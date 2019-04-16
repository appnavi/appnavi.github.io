import React from 'react';
import logoloading from './images/appnaviloading.png';




const TopPage =()=>({

  render (){
    return (
      <div style={{textAlign:'center',paddingTop:100}}>
      <img src={logoloading} alt="logo" style={{width:'15.0vw',height:'15.0vw'}}/>
      <h3>大阪府立大学アプリNavi</h3>
      <h5>ただいまサイト準備中！!</h5>
      </div>
    )
  }
})

export default TopPage
