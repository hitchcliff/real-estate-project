import React, { ReactElement, useEffect } from 'react'
import styles from './RealEstate.module.scss';
import { RootStore } from '../../Store';
import { ListForRentAction } from '../../Actions/ListForRent.actions';
import Filter from '../Filter/Filter';
import HomesList from '../HomesList/HomesList';
import { formatData } from '../../helpers/util';
import { useDispatch, useSelector } from 'react-redux';

const RealEstate = (): ReactElement => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state: RootStore) => state.listForRent)
    useEffect(() => {
        dispatch(ListForRentAction()); // call the action to fetch
    }, [])
    
    const new_data = formatData(data); // format data
    
    return (
        <div className={styles.container}>
           <Filter/>
           <HomesList items={new_data?.properties}/>
        </div>
    )
}

export default RealEstate;