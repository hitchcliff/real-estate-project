import React, { useEffect, useState } from 'react';
import styles from './RealEstate.module.scss';

import { RootStore } from '../../Store'; // types for state
import { ListForRentAction } from '../../Actions/ListForRent.actions';
import { useDispatch, useSelector } from 'react-redux'; // react-redux
import { formatData } from '../../helpers/util'; // utils

import Filter from '../Filter/Filter'; // filter

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import ForRent from '../ForRent/ForRent';
import ForSale from '../ForSale/ForSale';
import { filterData } from '../../helpers/filter';
import { Properties } from '../../types/ListForRent.types';
import { MapAndProperty } from '../../types';

interface IRealEstateProp {
  url: string;
  path: string;
}

const RealEstate = ({
  match,
}: RouteComponentProps<IRealEstateProp, any, any>): JSX.Element => {
  const dispatch = useDispatch();
  // current data from api [1]
  const { loading, data } = useSelector(
    (state: RootStore) => state.listForRent,
  );
  const [newData, setNewData] = useState({});
  // final and filtered results will be used in components rent and sale
  const [results, setResults] = useState<MapAndProperty[]>([]);

  // get filters from reducer
  const filters = useSelector((state: RootStore) => state.filters); // get the state
  useEffect(() => {
    dispatch(ListForRentAction()); // call the action to fetch
  }, []);

  // current data from api format [2]
  const new_data = formatData(data); // format data
  // filter the data
  useEffect(() => {
    if (!new_data) return;
    const finalResults = filterData(new_data, filters); // filter the data [3]

    if (!finalResults) return;
    setResults(finalResults);
  }, [filters]);

  if (!new_data) return <></>; // simply return if we dont have any data
  return (
    <div className={styles.container}>
      <Switch>
        {/* For rent page */}
        <Route exact={true} path={[match.url, match.url + '/rent']}>
          <ForRent items={results} tracker={new_data.tracking_params} />
        </Route>
        {/* For sale page */}
        <Route exact={true} path={match.url + '/sale'}>
          <ForSale items={results} />
        </Route>
      </Switch>
    </div>
  );
};

export default RealEstate;
