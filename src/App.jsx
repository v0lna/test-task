import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, AddUser, About, Users } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/add" component={AddUser} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
