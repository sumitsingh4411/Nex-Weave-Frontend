import React from 'react';
import Home from './component/home/Home';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Other from './component/other/Other';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/other'>
          <Other />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

