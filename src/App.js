import React, {Component}  from 'react';
import {BrowserRouter as Router,HashRouter } from 'react-router-dom';
import AppRoute from './AppRoute.js';
import Logo from './components/logo.js';
import TopPage from './TopPage.js';


class AppPage extends Component {

  constructor() {
    super()
      this.state = { isLoading: true }
  }

  componentDidMount() {
   setTimeout(() => this.setState({ isLoading: true }), 2500);
  }


  render() {
      return(
          this.state.isLoading ? <TopPage/> : <App/>
      )
    }
  }





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


export  {App,AppPage};
