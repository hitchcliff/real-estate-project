import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SortByBeds_action } from '../../Actions/Filters.action'
import { filterTimeOut, parseStrToNum } from '../../helpers/filter'
import ToggleSelection from '../ToggleSelectionNumbers/ToggleSelectionNumbers'
import styles from './SortByBeds.module.scss'
const SortByBeds = () => {
    const [value, setValue] = useState <number>(1) // use state value
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(SortByBeds_action(value))
        }, filterTimeOut)
        return () => {
            clearTimeout(timer)
        }
    }, [value])

    const handleToggleSelection = (e: string) => { //callback function
        let targetValue = parseStrToNum(e)
        setValue(targetValue) // set the value
    }
    return (
        <div className={styles.beds}>
            <h4>Sort by beds</h4>
            <ToggleSelection min={1} max={10} callback={handleToggleSelection}/> 
        </div>
    )
}

export default SortByBeds
