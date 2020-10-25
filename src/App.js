import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
