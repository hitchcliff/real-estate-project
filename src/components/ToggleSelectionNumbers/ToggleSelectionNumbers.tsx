import React, { ReactElement } from 'react'
interface ToggleSelectionProps {
    number?: number,
    items?: string,
    min: number | 0,
    max: number | 0,
    callback?: Function,
}
const ToggleSelectionNumbers: React.FC<ToggleSelectionProps> = (props): ReactElement => {
   const { min, max, callback } = props; 
   let numbers = []; // container

   if(!max || !min || !callback) return <></>; // check to see if there is an undefined
   for(let i=min; i<=max; i++) {
        numbers.push(i); // push the min and max to the array to map [this is necessarry]
   }

   const mapNumber = numbers.map(num => ( // map the numbers array
       <li onClick={e => callback(e)} key={num}>
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
