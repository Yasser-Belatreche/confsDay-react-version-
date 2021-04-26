import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './homePage/HomePage';
import FAQ from './FAQpage/FaqPage';
import LastEdition from './lastEditionPage/LastEditionPage';

const Pages = () => {
  console.log(window.location.href);
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/FAQ'>
        <FAQ/>
      </Route>
      <Route path='/LastEdition'>
        <LastEdition/>
      </Route>
      <Route path='/Registration'>
        <p>registration</p>
      </Route>
    </Switch>
  )
}

export default Pages;