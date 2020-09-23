import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SortByProperty_action } from '../../Actions/Filters.action'
import { filterTimeOut } from '../../helpers/filter'
import ToggleSelectionText from '../ToggleSelectionText/ToggleSelectionText'
import { SortByPropertyTypeContent } from './Content/SortByPropertyType.content'
import styles from './SortByPropertyType.module.scss'

const SortByPropertyType = () => {
    const [value, setValue] = useState<string | "any">("any")
    const dispatch = useDispatch()
    useEffect(() => {
       const timer = setTimeout(() => {
           dispatch(SortByProperty_action(value)); 
       }, filterTimeOut)
      return() => {
          clearTimeout(timer)
      } 
    }, [value])
    const handleToggleSelection = (e: string) => {
        setValue(e) // set the value we get from component
    }
    return (
        <div className={styles.property_type}>
            <h4>Sort by property type</h4>
            <ToggleSelectionText defaultChecked="any" items={SortByPropertyTypeContent} callback={handleToggleSelection}/>
        </div>
    )
}

export default SortByPropertyType
