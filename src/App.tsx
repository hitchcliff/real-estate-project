import React, { ReactElement } from 'react';
import './App.scss';
import { Homepage, Navbar, RealEstate } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="page-container">
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
            <Route path="/property" component={RealEstate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
