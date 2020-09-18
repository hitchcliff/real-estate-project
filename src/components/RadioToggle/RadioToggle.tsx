import React, { ReactElement, useState } from 'react'

interface RadioToggleProps {
    items: ItemsType,
    callback: Function
}

export type ItemsType = {
    value: string[],
    name: string[]
}
 
export type INameRadioToggleProp = string;

const RadioToggle: React.FC<RadioToggleProps> = (props): ReactElement => {
    const { callback, items: {value, name} } = props;
    const [state, setState] = useState({})
    const keys = Object.keys(state)[0]
    
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const target: INameRadioToggleProp = e.currentTarget.value;
        setState({
            [target]: true
        })
    }

    const styles = {
        width: '15px',
        height: '15px',
        marginRight: '10px'
    }

    return (
        <>
        {value.map((item, i)=> (
            <label className="radio-container" key={i}>
                <input style={styles}
                checked={keys === item ? true : false} 
                type="radio" value={item} 
                onChange={e=>callback(e)} 
                onClick={e=>handleClick(e)}
                />
                {name[i]}
                <span className="checkmark"></span>
            </label>
        ))}
        </>
    )
}

export default RadioToggle
