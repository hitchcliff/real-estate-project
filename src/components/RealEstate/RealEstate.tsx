import React from 'react';
import styles from './RealEstate.module.scss';

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import ForRent from '../ForRent/ForRent';
import ForSale from '../ForSale/ForSale';

interface IRealEstateProp {
  url: string;
  path: string;
}

const RealEstate = ({
  match,
}: RouteComponentProps<IRealEstateProp, any, any>): JSX.Element => {
  return (
    <div className={styles.container}>
      <Switch>
        {/* For rent page */}
        <Route exact={true} path={[match.url, match.url + '/rent']}>
          <ForRent />
        </Route>
        {/* For sale page */}
        <Route exact={true} path={match.url + '/sale'}>
          <ForSale />
        </Route>
      </Switch>
    </div>
  );
};

export default RealEstate;
