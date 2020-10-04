import React, { ReactElement } from 'react';
import './App.scss';
import { ForRent, ForSale, Homepage, Navbar, RealEstate } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForSold from './components/ForSold/ForSold';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="page-container">
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
            {/* For rent page */}
            <Route path="/rent" component={ForRent} />
            {/* For sale page */}
            <Route path="/sale" component={ForSale} />
            {/* Sold page */}
            <Route path="/sold" component={ForSold} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
