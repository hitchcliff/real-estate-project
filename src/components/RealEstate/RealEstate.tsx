import React, { ReactElement, useEffect } from 'react'
import styles from './RealEstate.module.scss';

import { RootStore } from '../../Store'; // types for state
import { ListForRentAction } from '../../Actions/ListForRent.actions';
import { useDispatch, useSelector } from 'react-redux';  // react-redux
import { formatData } from '../../helpers/util'; // utils

import Filter from '../Filter/Filter'; // filter

// React router
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom'
import ForRent from '../ForRent/ForRent';
import ForSale from '../ForSale/ForSale';

interface IRealEstateProp {
    url: string,
    path: string
}

const RealEstate = ({match}: RouteComponentProps<IRealEstateProp, any, any>): JSX.Element => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state: RootStore) => state.listForRent)
    useEffect(() => {
        dispatch(ListForRentAction()); // call the action to fetch
    }, [])
    console.log(data)
    const new_data = formatData(data); // format data
    if(!new_data) return <></>; // simply return if we dont have any data 
    
    return (
        <div className={styles.container}>
            <Filter filter={new_data?.tracking_params}/>
            <Switch>
                {/* For rent page */}
                <Route exact path={[match.url, match.url + '/rent']}>
                    <ForRent items={new_data.properties} tracker={new_data.tracking_params} />
                </Route>
                {/* For sale page */}
                <Route exact path={match.url + '/sale'}>
                    <ForSale items={new_data.properties} />
                </Route>
            </Switch>
        </div>
    )
}

export default RealEstate;