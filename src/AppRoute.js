import React  from 'react';
import { BrowserRouter as Router,withRouter, Switch,Route,HashRouter } from 'react-router-dom';
//import {TransitionGroup,CSSTransition} from 'react-transition-group';
import ScrollToTop from './components/ScrollToTop.js';
import Home from './Home.js';
import {AboutPage} from './About.js';
import {ProductPage} from './Product.js';
import {NewsPage} from './News.js';
import {ContactPage,LineContact} from './Contact.js';
import HeaderMenu from './components/header.js';


const AppRoute =({location}) => {
//  const currentkey = location.pathname.split("/")[1] || "/"

    return (
      //<TransitionGroup>
      //<CSSTransition key={currentkey} className='fade' timeout={800}>
      <div>
      <ScrollToTop>
        <div>
          <Switch location={location}>
          <Route exact path='/' component={Home}/>
        <Route path='/About' component={AboutPage}/>
        <Route path='/Product' component={ProductPage}/>
        <Route path='/News' component={NewsPage}/>
        <Route path='/Contact' component={ContactPage}/>
        <Route path='/Line' component={LineContact}/>
        </Switch>
            </div>
            <HeaderMenu/>
            </ScrollToTop>

                  </div>
      //</CSSTransition>
    //</TransitionGroup>

    );
}


export default withRouter(AppRoute)
