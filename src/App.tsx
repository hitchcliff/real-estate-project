import React, { ReactElement } from 'react';
import './App.scss';
import { Homepage, Navbar, RealEstate } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/homes" component={RealEstate} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
