import React from 'react'
import { Properties } from '../../types/ListForRent.types'
interface IForSaleProp {
    items?: Properties[] 
}
const ForSale: React.FC<IForSaleProp> = (props) => {
    return (
        <div>
           For sale page.  
        </div>
    )
}

export default ForSale
