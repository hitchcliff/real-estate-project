import React, { useEffect, useState } from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { getAccordionActiveItem, setClassActive } from '../../helpers/util';
import { ListingsContent } from '../Filter/Content/Filter.content';
import RadioToggle from '../RadioToggle/RadioToggle';
import styles from './AccordionList.module.scss';
import cx from 'classnames';
import { filterTimeOut, parseStrToNum } from '../../helpers/filter';
import { useDispatch } from 'react-redux';
import { SortByListingStatus_action, SortBySize_action } from '../../Actions/Filters.action';
import { Size } from '../../types/Filters.types';

const AccordionList = () => {
    let ariaExpanded = document.querySelectorAll('.accordion__button');
    const [state, setState] = useState(false) // this is for accordion
    const [listing, setListing] = useState<string>("standard")
    const [size, setSize] = useState<Size>({
        sqft_min: 1,
        sqft_max: 10000 // 10k
    })
    const dispatch = useDispatch()

    // for listing 
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(SortByListingStatus_action(listing))
        }, filterTimeOut)

        return () => {
            clearTimeout(timer)
        }
    }, [listing]) 

    // for size
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(SortBySize_action(size))
        }, filterTimeOut)
        return () => {
            clearTimeout(timer)
        }
    }, [size])

    // set class active in accordion
    useEffect(() => {
        const active = getAccordionActiveItem(ariaExpanded); // get current item that is active
        setClassActive(active, ariaExpanded); // set current item a class

    }, [ariaExpanded, state])

    const handleRadioToggle = (e: React.ChangeEvent<HTMLInputElement>) => { // get the value in the listing
        const target = e.target.value; // the selected value in radio buttons
        setListing(target);
    }

    const handleSetMinSize = (e: string) => {
        if(e === "min") return;
        setSize({
            sqft_min: parseStrToNum(e),
            sqft_max: size.sqft_max
        })
    }

    const handleSetMaxSize = (e: string) => {
        if(e === "max") return;
        setSize({
            sqft_min: size.sqft_min,
            sqft_max: parseStrToNum(e) 
        })
    }

    return (
        <div className={styles.accordion}>
            <Accordion onChange={e => setState(!state)}>
                {/* Listing status */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={styles.heading}>
                                <h4>Listing status</h4>
                                <span>+</span>
                            </div>
                        </AccordionItemButton> 
                    </AccordionItemHeading> 
                    <AccordionItemPanel>
                        <div className={styles.content}>
                            <RadioToggle items={ListingsContent} callback={handleRadioToggle}/>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                {/* Building Size */}
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={styles.heading}>
                                <h4>Size</h4> 
                                <span>+</span>
                            </div> 
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={cx(styles.content, styles.building)}>
                            <div>
                                <input type="number" placeholder="min" name="building_size" id="building"
                                    value={size.sqft_min}
                                    onChange={e=> handleSetMinSize(e.currentTarget.value)} 
                                />
                                <span>sqft</span>
                            </div>
                            <div>
                                <input type="number" placeholder="max" name="building_size" id="building"
                                    value={size.sqft_max}
                                    onChange={e=> handleSetMaxSize(e.currentTarget.value)}
                                />
                                <span>sqft</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                {/* Lot Size */}
                {/* <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={styles.heading}>
                                <h4>Lot size</h4>
                                <span>+</span>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={cx(styles.content, styles.lot)}>
                            <div>
                                <input type="number" placeholder="Max" name="building_size" id="building"/>
                                <span>sqft</span>
                            </div>
                            <div>
                                <input type="number" placeholder="Min" name="building_size" id="building"/>
                                <span>sqft</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem> */}
            </Accordion>
        </div>
    )
}

export default AccordionList
