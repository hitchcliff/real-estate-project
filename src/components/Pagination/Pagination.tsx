import React, { useState } from 'react'
import styles from './Pagination.module.scss'
interface IPaginationProps {
    number: number,
    callback: Function
}
const Pagination: React.FC<IPaginationProps> = (props) => {
    const { number, callback } = props;
    const [state, setState] = useState<number | 1>(1)
    let pages = [] // pages
    for(let i=1; i<=number; i++) {
        pages.push(i) // push number of pages
    }

    const handleClick = (number: number) => {
        setState(number);
        callback(number);
    }

    return (
        <div className={styles.container}>
          <ul> { pages.map(item => ( // loop the pages
                  <li key={item}
                  onClick={e=> handleClick(item)} 
                  className={state === item ? styles.active : styles.default}>
                    <button>{item}</button>
                  </li>
           )) } 
          </ul>
        </div>
    )
}

export default Pagination
