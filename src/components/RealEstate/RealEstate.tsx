import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListForRentAction } from '../../Actions/ListForRent.actions';
import { RootStore } from '../../Store';
import Filter from '../Filter/Filter';
import HomesList from '../HomesList/HomesList';
import styles from './RealEstate.module.scss';
const RealEstate = () => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state: RootStore) => state.listForRent)
    useEffect(() => {
        dispatch(ListForRentAction()); // call the action to fetch
    }, [])
    
    return (
        <div className={styles.container}>
           <Filter/>
           <HomesList/>
        </div>
    )
}

export default RealEstate;