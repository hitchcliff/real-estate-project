import React from 'react'
import { Properties } from '../../types/ListForRent.types'
import { rent_propertiesDataFormat } from '../../helpers/rent_format_data';
import styles from './HomesList.module.scss'
interface IHomesListProp {
    items?: Properties[] 
}
const HomesList: React.FC<IHomesListProp> = (props) => {
    const { items } = props;
    const new_items = rent_propertiesDataFormat(items) // format data
    console.log(new_items)
    return (
        <div className={styles.container}>
           Homes List 
        </div>
    )
}

export default HomesList
