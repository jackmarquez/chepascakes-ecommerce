import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInOutPage from './pages/sign-in-out/sign-in-out.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route  exact path = '/' component={HomePage} />
      <Route  path = '/shop' component={ShopPage} />
      <Route  path = '/sign' component={SignInOutPage} />
      </Switch>
    </div>
  );
}

export default App;
