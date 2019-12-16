import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, About } from './components';
import { UserContainer, AddUserContainer } from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={UserContainer} />
        <Route path="/add" component={AddUserContainer} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
