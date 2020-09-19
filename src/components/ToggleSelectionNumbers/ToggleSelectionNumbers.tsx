import React, { ReactElement, useState } from 'react'
import styles from './ToggleSelectionNumbers.module.css';
interface ToggleSelectionProps {
    number?: number,
    items?: string,
    min: number | 0,
    max: number | 0,
    callback?: Function,
}
const ToggleSelectionNumbers: React.FC<ToggleSelectionProps> = (props): ReactElement => {
   const [handleClick, setHandleClick] = useState<string | null>(null)
   const { min, max, callback } = props; 
   let numbers = []; // container

   if(!max || !min || !callback) return <></>; // check to see if there is an undefined
   for(let i=min; i<=max; i++) {
        numbers.push(i); // push the min and max to the array to map [this is necessarry]
    }

    const handleClickChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.currentTarget.childNodes[0]; // get the current target child 
        const value: string | null = target.textContent; // get the target content
        if(!value) return; // return if there is no value, might be bug
        if(value >= "5"){ 
            setHandleClick("5"); // it should be 5 not 5+
            callback(5)
        } else {
            setHandleClick(value) // set the value
            callback(value)
        }
   }
   
   const mapNumber = numbers.map(num => ( // map the numbers array
       <li key={num}
        onClick={e => handleClickChange(e)}
        className={handleClick === num.toString() ? styles.active : styles.default}>
           <span>{num >= 5 ? num + "+" : num}</span>
       </li>
   ))
   
    return (
        <ul>
            {mapNumber}
        </ul>
    )
}

export default ToggleSelectionNumbers
