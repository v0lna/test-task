import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, AddUser, About } from './components';
import { UserContainer } from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={UserContainer} />
        <Route path="/add" component={AddUser} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
