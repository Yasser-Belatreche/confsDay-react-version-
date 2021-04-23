import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './homePage/HomePage'

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/FAQ'>
        <p>faq</p>
      </Route>
      <Route path='/LastEdition'>
        <p>last edition</p>
      </Route>
      <Route path='/Registration'>
        <p>registration</p>
      </Route>
    </Switch>
  )
}

export default Pages;