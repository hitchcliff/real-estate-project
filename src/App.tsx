import React, { ReactElement } from 'react';
import './App.scss';
import { ForRent, ForSale, ForSold, Homepage, Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/404/404';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import RentDetails from './components/RentDetails/RentDetails';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="page-container">
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
            {/* For rent page */}
            <Route exact={true} path="/rent" component={ForRent} />
            {/* For sale page */}
            <Route exact={true} path="/sale" component={ForSale} />
            {/* Sold page */}
            <Route exact={true} path="/sold" component={ForSold} />
            {/* For Sale and Sold details */}
            <Route exact={true} path="/property/:id" component={PropertyDetails} />
            {/* For rent details */}
            <Route exact={true} path="/rent/:id" component={RentDetails} />
            {/* 404 */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
