import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Pricing, Register, Usage, Features, Dashboard } from './routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './landing';

// these will be the main pages for non signed in users
function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/features">
          <Features />
        </Route>
        <Route exact path="/usage">
          <Usage />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/logIn">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
