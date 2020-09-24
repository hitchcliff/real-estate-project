import React from 'react'
import { Properties } from '../../types/ListForRent.types';
import styles from './HomesListDisplay.module.scss'
interface IHomesListDisplayProp {
    items?: Properties[]
}
const HomesListDisplay: React.FC<IHomesListDisplayProp> = (prop) => {
    const { items } = prop;
    return (
        <div className={styles.container}>
            List display        
        </div>
    )
}

export default HomesListDisplay
