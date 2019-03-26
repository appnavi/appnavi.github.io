import React, {Component}  from 'react';
import {BrowserRouter as Router,HashRouter } from 'react-router-dom';
import AppRoute from './AppRoute.js';
import Logo from './components/logo.js';


class App extends Component {
    render(){
      return(
        <div>
        <HashRouter>
          <AppRoute/>
          <Logo/>
          </HashRouter>

        </div>
      )
    }

  }


export default App;
